
const http = require("http");
const server = http.createServer();
server.listen(3000, "localhost");

server.on("request", (request, response) => {
  response.write("<h1>Hello Node!!!!</h1>");
  response.end();
});
