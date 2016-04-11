var fs = require("fs");
var path = require("path");
// this is small but an important habit, don't forget your 'var' keyword when delcaring a variable.
var dir = process.argv[2];
var ext = '.' + process.argv[3];

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
