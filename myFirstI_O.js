var fs = require("fs");
var file = process.argv[2];
var lines = fs.readFileSync(file, "utf8").split(/\n/);
console.log(lines.length-1);
