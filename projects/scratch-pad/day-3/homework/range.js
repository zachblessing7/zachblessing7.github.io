// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    //YOUR CODE GOES BELOW HERE //
    
        
      var startNumber = start; //setting up variables so we can later switch the start and finish values. 
      var endNumber = end;
      var reverse = false; // setting reverse to false so that the code knows that this is false now and then we can make it true later and return the array in reverse order. 
      var arrayToHoldResults = [];
       
      if(start > end) { // conditional stmt to say that if the start number is greater than the end number, set reverse equal to true and switch the start number to the value end holds and same for the end number variable.
        reverse = true;
        startNumber = end;
        endNumber = start;
      }
      
      for (var i = startNumber; i <= endNumber; i++) { //this will loop over the array of numbers and push them into our arrayToHoldResults array. start and end numbers are inclusive. 
          arrayToHoldResults.push(i); //pushes the values into our array in ascending order. 
      }   
      
      if(reverse === true) { //conditional stmt stating that if reverse strictly equals true, then take the array of numbers and list them in reverse or descending order. 
        arrayToHoldResults.reverse();
      }
    return arrayToHoldResults; //returns the array after the conditional stmts are tested. 


    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
