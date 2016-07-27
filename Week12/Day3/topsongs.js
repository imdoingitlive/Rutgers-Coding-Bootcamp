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
})

var artistSongs = function(){
  console.log("Please enter the artist");
  inquirer.prompt([
    {
      name: "name",
      message: "Artist: "
    }
  ]).than(function(){
    connection.query('', [], function(er){
      if (!err){
        query();
      }
    })
  })
}

var artistMultiple = function(){

}

var range = function(){

}

var songSearch = function(){

}

var query = function(){
  inquirer.prompt([{
    type: 'list',
    message: 'What would you like to search for?',
    options: ['Songs sung by a specific artist', 'Artists who appear more than once', 'Songs within a specific position range', 'A specific song'],
    name: 'options'
  }]).then(function(user){
    if (user.choice === 'Songs sung by a specific artist'){
      artistSongs();
    } else if (user.choice === 'Artists who appear more than once'){
      artistMultiple();
    } else if (user.choice === 'Songs within a specific position range'){
      range();
    } else if (user.choice === 'A specific song'){
      songSearch();
    }
  });
}

query();