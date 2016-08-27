var dog = new pet();

dog.outside = false;

dog.bark = function(){
  console.log("Woof! Woof!");
}
//----------------------------------
var cat = new pet();

cat.houseQuality = 100;

cat.meow = function(){
  console.log("Meow! Meow!");
}

cat.destroyFurniture = function(){
  if (this.houseQuality - 10 > 0){
    this.houseQuality -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  } else{
    console.log("I've already destroyed it all!");
  }
}