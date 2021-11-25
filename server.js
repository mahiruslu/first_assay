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
            logtofile('usage.log', 'Home page visited by ' + ip.address() +' - '+  moment().toDate() +'\n');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("You're at about page");
            res.end();
            logtofile('usage.log', 'About page visited by ' + ip.address() +' - '+  moment().toDate() +'\n');
            break;
        case '/contact':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("You're at contact page");
            res.end();
            logtofile('usage.log', 'Contact page visited by ' + ip.address() +' - '+  moment().toDate() +'\n');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("Page not found");
            res.end();
            logtofile('usage.log', 'Unknown page visited by ' + ip.address() +' - '+  moment().toDate() +'\n');
            break;

    }
}).listen(8080)

function logtofile(file, data) {
    fs.appendFile(file, data, function (err) {
        if (err) throw err;
        console.log(data +' page visited');
    });
}