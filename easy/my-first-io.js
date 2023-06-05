const fs = require("fs");

const infromation = fs.readFileSync(process.argv[2], "utf8");
const newLines = infromation.split("\n").length - 1;
console.log(newLines);
