var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 't3st3r',
  database: 'greatbay_db'
})
connection.connect(function(err){
  if(err) throw err;
  //console.log('connected as id ' + connection.threadId);
})


var postItem = function(){
  console.log("Post an Item:");
  inquirer.prompt([{
      name: "name",
      message: "Item Name: "
    }, {
      name: "desc",
      message: "Item Description: "
    }, {
      name: "price",
      message: "Item Price: ",
      validate: function(value) {
        if (isNaN(value) == false) {
            return true;
        } else {
            return false;
        }
      }
    }
  ]).then(function(answers){
    connection.query('INSERT INTO items(name, description, price) values (?, ?, ?)', [answers.name, answers.desc, answers.price], function(err){
      if (!err){
        console.log("Item added!");
        askQuestion();
      }
    })
  })
}
var bidItem = function(){
  console.log("BidItem Function");
};

var askQuestion = function(){
  inquirer.prompt([
  {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['Post an item', 'Bid on an item', 'Exit'],
    name: 'choice'
  }]).then(function(user){
    if (user.choice === 'Post an item'){
      postItem();
    } else if(user.choice === 'Bid on an item'){
      bidItem();
    } else {
      console.log("Thanks, See You Again!");
      connection.end();
    }
  });
}

askQuestion();