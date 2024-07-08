const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("req url: ", req.url);
  const parsedUrl = url.parse(req.url, true);
  const params = parsedUrl.query;
  console.log("parsedUrl", parsedUrl);
  console.log("params", params);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Params: ${JSON.stringify(params)}`);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
