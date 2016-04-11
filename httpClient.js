var http = require("http");

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(d) { console.log(d); });
}).on('error', function(er) {
  console.log(er.message);
});
