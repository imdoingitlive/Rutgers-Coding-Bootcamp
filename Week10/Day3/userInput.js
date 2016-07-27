// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

//    - Basic input, 
//    - Password, 
//    - List, 
//    - Checkbox, 
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');

inquirer.prompt([

  {
    type: "input",
    message: "Please enter a username: ",
    name: "name"
  },
  {
    type: "password",
    message: "Please create a password: ",
    name: "password"
  },
  {
    type: "list",
    message: "Choose your favorite hero!",
    choices: ["Faceless Void", "Juggernaut", "Enigma", "Luna"],
    name: "hero"
  },
  {
    type: "checkbox",
    message: "Select your starting items: ",
    choices: ["Tangoes", "Salve", "Clarity Potion", "Iron Branch", "Magic Stick"],
    name: "items"
  },
  {
    type: "confirm",
    message: "Are you ready for battle?",
    name: "confirm",
    default: true
  }
  ]).then(function(user){
    
  });