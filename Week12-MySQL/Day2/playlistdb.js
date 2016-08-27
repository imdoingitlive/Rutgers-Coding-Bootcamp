var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "t3st3r",
  database: "playlistdb"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
})

connection.query('SELECT * FROM `songs`', function(error, results, fields){
  console.log(JSON.stringify(results));
  console.log("-----------");
});

//this is a prepared statement - has 3 parameters where the 3rd parameter is the callback
connection.query('SELECT * FROM songs WHERE genre=?',['Classic Rock'], function(error, results, fields){
  for (var i = 0; i < results.length; i++){
    console.log(results[i].title);
    console.log(results[i].artist);
    console.log("----------");
  }
});

//prepared statement
connection.query('UPDATE songs SET title=? artist=? WHERE id=? AND genre=?', ["Imagine","Who","3","Classic Rock"], function(){

})