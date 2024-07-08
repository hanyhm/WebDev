const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request Headers:", req.headers);

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Custom-Header": "Ramez",
  });
  res.end("Headers Info Logged");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
