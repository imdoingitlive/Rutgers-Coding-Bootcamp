var inquirer = require('inquirer');

function coinFlip(){
  //returns heads or tails
  return(Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
  
  //returns 0 or 1
  //return Math.floor(Math.random() * 2);
}

//console.log(coinFlip());

function Player(name, position, offense, defense){
  this.name = name,
  this.position = position,
  this.offense = offense,
  this.defense = defense
  this.goodGame = function(){
    if (coinFlip() === 'heads'){
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  }
  this.badGame = function(){
    if (coinFlip() === 'heads'){
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  }
  this.printStats = function(){
    console.log("Name: " +this.name+ "\nPosition: " +this.position+ "\nOffense: " +this.offense+ "\nDefense: " +this.defense);
    console.log("\n----------\n");
  }
} 

var count = 0;
var starters = [];
var subs = [];

var createPlayer = function(){
  
}