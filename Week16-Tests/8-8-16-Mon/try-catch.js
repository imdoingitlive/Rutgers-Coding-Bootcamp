'use strict';

var assertThrows = function (func, x, y) {
  var threw = false;
  var output;

  // Try to execute func with x, y
  try {
    output = func(x, y);
  } catch (err) {
    // If func throws, note it.
    threw = true;
  }
  
  // Report whether func threw.
  if (!threw)
    console.log('Function did not throw.' + output);
  else
    console.log('Function threw, as expected.');
    
  // Return whether func threw.
  return threw;
};

var multiply = function (x, y) {
  if (typeof x != 'number' || typeof y !== 'number')
    throw "Either x or y is not a number. Please try again with numbers.";
  else
    return x * y;
}

//::NOTE:: Uncomment one or write more cases
//assertThrows( multiply, 2, 2);
//assertThrows( multiply, "two", "two");