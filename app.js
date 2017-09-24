// give us your http

var http = require('http');

 

// Make us a server with that http

http.createServer(function(request, response) {


// We're 200… OK 

    response.writeHead(200);


// Achievement unlocked!

    response.write('Hello OSF interns!');

// End mission

    response.end();

}).listen(80);

// Let us know you are working

console.log('Listening on port 8080…');