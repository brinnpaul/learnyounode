var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(error, files) {
    if (error) {
      return callback(error);
    }
    files = files.filter(function(file) {
      if (path.extname(file) === '.' + ext) {
        return file;
      }
    });

    callback(null, files);
  });
};
