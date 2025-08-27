const http = require("http");
const fs = require("fs");
const url = require("url");
// import custom template module
const passDate = require("./replaceTemplate");
// read json data
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const jsonData = JSON.parse(data);

// read html
var homepage = fs.readFileSync(`${__dirname}/home.html`, "utf-8");
var card = fs.readFileSync(`${__dirname}/card.html`, "utf-8");
var menuitempage = fs.readFileSync(`${__dirname}/product.html`, "utf-8");
// set data in templates
/*
function passDate(data, template) {
  let one = template.replace("{item}", data.product);
  one = one.replace("{index}", data.id);
  one = one.replace("{title}", data.title);
  one = one.replace("{about}", data.about);
  return one;
}
*/
// server

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    let cardlist = jsonData
      .map((item) => {
        //return
        return passDate(item, card);
      })
      .join("");

    homepage = homepage.replace("{content}", cardlist);

    res.end(homepage);
  } else if (pathname === "/menu") {
    const product = jsonData[query.id];
    let foundProduct = passDate(product, menuitempage);
    res.end(foundProduct);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>error</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
