var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.
  createConnection({
    host: 'localhost',
    user: 'root',
    password: 't3st3r',
    database: 'seinfeld_db'
  });

connection.connect(function(err){
  if (err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.get('/cast', function(req, res){
  connection.query('SELECT * FROM actors ORDER BY id ASC;', function(err, result){

    var html = '<h1>Seinfeld Actors</h1>';

    html += '<ul>'

    for (var i = 0; i < result.length; i++){
      html += '<li><p>  ID: ' + result[i].id + '</p>';
      html += '<li><p>  Name: ' + result[i].name + '</p>';
      html += '<li><p>  Coolness Points: ' + result[i].coolness_points + '</p>';
      html += '<li><p>  Attitude: ' + result[i].attitude + '</p>';
    } 
  });
});

var port = 3000;
app.listen(port);