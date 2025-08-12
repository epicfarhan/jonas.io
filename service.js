const fs = require("fs");
const text = fs.readFileSync("./README.md", "utf-8");
const document = `well the readme says : ${text}`;
fs.writeFileSync("./document", document);
