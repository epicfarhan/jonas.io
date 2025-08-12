const fs = require("fs");
const text = fs.readFileSync("./README.md", "utf-8");
console.log(text);
