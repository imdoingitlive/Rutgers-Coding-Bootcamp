var array = process.argv.splice(2, process.argv.length-1);

array.sort(function(a, b){
  return a - b;
});

console.log(array);