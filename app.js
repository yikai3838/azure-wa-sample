var port = 8080,
    http = require('http');

function onRequest(request, response) {
  console.log("Request received.");

  console.log("From: ", request.rawHeaders);

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(port);

console.log("Server has started.");