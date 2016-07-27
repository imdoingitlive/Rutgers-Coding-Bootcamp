//constructor which can be used to create objects with the .raining, .noise, and .makeNoise properties
function Animal(raining, noise){
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function(){
    if (this.raining == true){
      console.log(this.noise);
    }
  }
}
//set variables dogs and cats to be Animal objects
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining == true && cats.raining == true){
    console.log("RAINING CATS AND DOGS OMG!!!!");
  }
}

massHysteria(dogs, cats);