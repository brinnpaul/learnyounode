var http = require("http");

url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');
  // instead of creating an annonymous function as the callback.
  // you can just make the callback console.log, since you aren't doing anything unique inside of the function
  // besides calling console.log
  // res.on('data', console.log)  // the argument is passed to console.log
  res.on('data', function(d) { console.log(d); });
}).on('error', function(er) {
  console.log(er.message);
});
