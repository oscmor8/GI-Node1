const fs = require("fs");

var file = process.argv[2];

fs.readFile(file, "utf-8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.split("\n").length - 1;
  console.log(lines);
});
