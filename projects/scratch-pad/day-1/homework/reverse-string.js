// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    var msg = "";  // declaring variable msg and assigning the value of an empty string. This will collect the output. 
    for (var x = input.length - 1; x >= 0; x-- ){ // created a for loop that starts at the last index of the string and decrements down until the index >= 0. 
      msg += input[x]; // the code here is stating that we want to concatenate the input indexs as the for loop runs through the string. starts at last index and moves down by one until reaching 0.
    } 
    return msg; //returning the variable msg now will display the string from our input parameter and display each index in reverse order into the empty string we created for msg. 
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}