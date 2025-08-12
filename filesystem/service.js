// file system node js
const fs = require("fs");
const file = "./README.md";

// sync
/*
const text = fs.readFileSync("./README.md", "utf-8");
const document = `well the readme says : ${text}`;
fs.writeFileSync("./filesystem/document.txt", document);
*/
// async

fs.readFile(file, "utf-8", (err, data) => {
  console.log(data);
});
