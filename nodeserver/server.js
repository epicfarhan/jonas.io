const http = require("http");
const server = http.createServer((req, res) => {
  con;
  res.end("server running...");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
