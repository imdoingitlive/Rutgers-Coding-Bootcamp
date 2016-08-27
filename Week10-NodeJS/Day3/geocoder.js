// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require('geocoder');
// Take in the command line arguments
var input = process.argv.splice(2, process.argv.length-1);
// Build your address as an array or string
input = input.join(' ');
// Then use Geocoder NPM to geocode the address 
geocoder.geocode(input, function(err, data){
  // console.log(data);
  if (!err){
    console.log(JSON.stringify(data, null, 2));
  }
});

// var geocoder = require('geocoder');

// var everyArgumentAfter = process.argv.splice(2, process.argv.length-1);

// everyArgumentAfter = everyArgumentAfter.join(' ');

// geocoder.geocode(everyArgumentAfter, function(err, data){
//     if (!err){
//         console.log(JSON.stringify(data, null, 2));
//     } 
// });