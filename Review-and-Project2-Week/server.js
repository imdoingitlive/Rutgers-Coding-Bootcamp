//this is a static file server

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(__dirname + '/public'));

//send a file
res.sendFile();

//send HTML
res.send();

//send JSON
res.json();

//closure
(function(){
  console.log("Hello World");
})();