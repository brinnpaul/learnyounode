var processArray = function() {
  var added = 0;

  for ( var i = 2; i < process.argv.length; i++ ) {
    added += Number(process.argv[i]);
  }

  return added;
}

console.log(processArray());
