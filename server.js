var http = require('http');
var fs = require('fs');
var ip = require('ip');
var moment = require('moment');

http.createServer(function (req, res) {
    switch (req.url) { 
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            //show which page is showing
            res.write("You're at homepage");
            res.end();
            //get users ip address and time
            fs.writeFile('usage.log', 'Home page visited by ' + ip.address() +' - '+ moment().toDate(), function (err) {
                if (err) throw err;
                console.log('Home page visited!');
            });
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("You're at about page");
            res.end();
            fs.writeFile('usage.log', 'About page visited by ' + ip.address() +' - '+  moment().toDate(), function (err) {
                if (err) throw err;
                console.log('About page visited!');
            });
            break;
        case '/contact':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("You're at contact page");
            res.end();
            fs.writeFile('usage.log', 'Contact page visited by ' + ip.address() +' - '+  moment().toDate(), function (err) {
                if (err) throw err;
                console.log('Contact page visited!');
            });
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("Page not found");
            res.end();
            fs.writeFile('usage.log', 'Unknown page visited by ' + ip.address() +' - '+  moment().toDate(), function (err) {
                if (err) throw err;
                console.log('Unknown page visited!');
            });
            break;

    }
}).listen(8080)