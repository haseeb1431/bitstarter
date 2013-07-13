var express = require('express');
var fs=		require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 23!');
  
  var file=new Buffer(100);
  file=fs.readFileSync("index.html");
  //console.log("here");
  response.send(file.toString());
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  var file=new Buffer(100);
  file=fs.readFileSync("index.html");
  console.log(file.toString());
});