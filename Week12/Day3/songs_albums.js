var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 't3st3r',
  database: 'TopSongsDB'
})

connection.connect(function(){
  if(err) throw err;
  query();
})

var multiSearch = function(){
  inquirer.prompt([
    {
      type: 'input',
      message: 'Which artist would you like to search for?',
      name: 'artist'
    }
  ]).then(function(answer){
    var query = 'SELECT position'
  })
}