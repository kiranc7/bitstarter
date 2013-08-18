var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var buf = fs.readFileSync("index.html");   
   var rsp = buf.toString('utf-8');
   response.send(rsp);
   
   //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
