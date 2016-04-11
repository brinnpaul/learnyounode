var fs = require("fs");
var path = require("path");

dir = process.argv[2];
ext = '.' + process.argv[3];

var filter = fs.readdir(dir, function(error, files) {
  if (error) {
    throw error;
  }
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});

filter;
