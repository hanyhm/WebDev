const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/success") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Success");
  } else if (req.url === "/notfound") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  } else if (req.url === "/error") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
