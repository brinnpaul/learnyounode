var fs = require("fs");
var file = process.argv[2];
fs.readFile(file, "utf8", function(error, content) {
  if (error) {
    throw error;
  }

  console.log(content.split(/\n/).length-1);
});
