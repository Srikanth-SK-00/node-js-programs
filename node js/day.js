var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   let x=5;
  for(var i=0;i<=x;i++)
  {
    for(var j=i;j<=x;j++)
    {
      res.write("*");
    }
    res.write('\n');
  }
  res.end();
}).listen(5000); 
