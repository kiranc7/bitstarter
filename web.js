var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   fs.readFileSync('index.html', function (error, data) {
     if(err) throw err;
     console.log(data);
     var buffer = new Buffer();
     buffer.write(data, "utf-8");
     var rsp = buffer.toString('utf-8');
     response.send(rsp);
   });
   //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
