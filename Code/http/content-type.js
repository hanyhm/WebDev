const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "This is a JSON response" }));
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
