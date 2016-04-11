var fs = require("fs");
var path = require("path");
var filterFunc = require("./mIM_function.js");

dir = process.argv[2];
ext = process.argv[3];

filterFunc(dir, ext, function(error, data) {
  if (error) {
    console.log(error);
  }

  data.forEach(function(file) {
    console.log(file);
  });
});
