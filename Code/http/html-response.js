const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  // const html = fs.readFileSync(__dirname + "/index.html", "utf8");
  // res.end(html);
  // res.end("<h1>This is an HTML response</h1>");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
