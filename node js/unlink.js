var fs = require('fs');

fs.unlink('sri.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 