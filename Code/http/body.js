const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Body: ${body}`);
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Send a POST request with a body");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
