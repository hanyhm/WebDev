const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const parsedUrl = url.parse(req.url, true);
  const params = parsedUrl.query;
  let html = fs.readFileSync(__dirname + "/template-ex.html", "utf8");
  html = html.replace("{{name}}", params.name);
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
