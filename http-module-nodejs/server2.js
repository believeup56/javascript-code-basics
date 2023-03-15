var http = require('http');

var server = http.createServer(function (request, response) {
    // untuk JSON
    // response.writeHead(200, {'Content-Type': 'application/json'});

    // untuk PDF
    // response.writeHead(200, {'Content-Type': 'application/pdf'});

    // untuk XML
    // response.writeHead(200, {'Content-Type': 'application/xml'});

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello <b>World</b>!');
    response.end();
});

server.listen(8000);

console.log("server running on http://localhost:8000");