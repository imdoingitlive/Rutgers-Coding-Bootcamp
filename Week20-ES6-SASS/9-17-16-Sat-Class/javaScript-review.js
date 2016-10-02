//create a function that reverses a string
var x = 'test';

var y = x.split('').reverse().join('');

console.log(y); 

//find 9 in an array
var x = [1,2,3,4,5,6,7,8]

x.includes(9);
//or
x.indexOf(9);

//remove 1 from the array
var x = [0,1,2,3]

x.splice(1,1);

//move the first item in the array to the end of the array
x = ['a','b','c']

x.push(x.shift());

//create a private variable
function counter(){
  var count = 0;
  return function(){
    alert(count++);
  }
}

//print the numbers from 1 to 100, but for multiples of 3 print "Fizz" instead of the number. For multiples of 5 print "Buzz". For multiple of 3 and 5 print "FizzBuzz"
for (var i = 0; i <= 100; i++){
  
}

for(i=0;i<100;)
console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)