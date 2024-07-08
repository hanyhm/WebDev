const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  // console.log("Request object:", req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request Info Logged");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
