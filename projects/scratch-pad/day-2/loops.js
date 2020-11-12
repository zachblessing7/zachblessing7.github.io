// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // create a for loops over the array. use array.length to find the ending character value. 
  for (var i = 0; i < array.length; i++) // using a for loop to loop through the array starting at index 0 and adding one each time the loop is complete. 
  console.log(array[i]); //this will print the array values at each index after completing the for loop. 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
   for (var i = array.length - 1; i >= 0; i--) //looping through the array in reverse order. since array.length -1 will start us at the last index of the array. we decrement by one each time the for loop is complete. 
  console.log(array[i]); // will print the array values at each index in reverse order. so starting at the last index and ending at index[0].
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object); // Object.keys method will return an array with the objects keys from the input object. 
 
  

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var keys in object){ //for in loop to loop through the input object and print it's keys. 
   console.log(keys); //prints the keys from the input object. 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var values in object) { //for loop to loop through the input object and return an array (by using the Object.values method) filled with the Object's values. 
 return Object.values(object); // returns the array containing the Object's values. 
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
   for (var values in object){ //for in loop to search through the input object and print its values. 
   console.log(object[values]); //prints to the console the input object's values. 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  return Object.entries(object).length; // using the Object.entries method we can take the input object and return the properties (or key/value pairs). the .length method will return the number of properties in the object. 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
    var properties = Object.values(object).reverse(); //declaring a variable to make the for loop more clean. assinging the values in the input object in reverse order. 
    for (var i = 0; i < properties.length; i++){ // loop through the input object and increment by 1 each time until we reach the length of the object values. since we .reverse() in the step above we can do an incrementing for loop.
      console.log(properties[i]); //prints to the console the input object's values in reverse order as each index of the input object's values passes through the for loop.
    }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
