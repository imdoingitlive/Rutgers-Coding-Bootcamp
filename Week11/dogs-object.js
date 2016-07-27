// Make a dogs object with three keys...

// First key called "raining" with a value of true

// Second key called "noise" with a value of "Woof!"

// Third key calle "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// Make a cats object with three keys...

// First key called "raining" with a value of false

// Second key called "noise" with a value of "Meow!"

// Third key calle "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

// Make the dog bark

// Make the cat meow

// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.

// BONUS: Look to see if you can find any means to simplify your code further and further

// var someObjectViaJSON = {
//   "someProperty": "someValue",
//   "someMethod": function(){

//   }
// };
// //OR
// //top line below is the constructor
// function Animal(initialValue, someOtherValue){
//   this.someProperty = initialValue;
//   this.someMethod = function(){

//   }
// };

// var someInstance1 = new Animal("value1", "value2");
// var someInstance2 = new Animal("value3", "value4");

function Dog(){
  raining: true,
  noise: "Woof!",
  makeNoise: function(){
    //console.log() noise to screen if raining dogs
    if(raining === true){
      console.log(noise);
    }
  }
};

function Cat(){
  raining: false,
  noise: "Meow!",
  makeNoise: function(){
    //console.log() noise if raining cats
    if(raining === true){
      console.log(noise);
    }
  }
};

var dogs = new Dog(true);
var cats = new Cat(true);

console.log(dogs);
console.log(cats);