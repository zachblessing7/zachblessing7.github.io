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
    // YOUR CODE GOES BELOW HERE //
    var reverse = false;
    var arrayToHoldResults = [];
    
    if (start > end){
        reverse = true;
        
    }
    
    // var first = start;
    // var last = end;
    // var reverse = false;
    // var arrayToHoldResults = [];
    // if(first > last){
    //     reverse = true; 
    //     first = end;
    //     last = start;
    // }
    // for (var i = first; i <= last; i++){
    //     arrayToHoldResults.push(i);
    // }
    // if (reverse === true){
    //     arrayToHoldResults.reverse();
    // }
    
    
    
    
    
    
    
    // printRange(number1, number2);
    //   var startNumber = number1;
    //   var endNumber = number2;
    //   var reverse = false;
    //   var arrayToHoldResults = [];
       
    //   if(number1 > number2) {
    //     reverse = true;
    //     startNumber = number2;
    //     endNumber = number1;
    //   }
      
    //   for (var i = startNumber; i <= endNumber; i++) {
    //       arrayToHoldResults.push(i);
    //   }   
      
    //   if(reverse === true) {
    //     arrayToHoldResults.reverse();
    //   }
    
    
    
    
    
    
    // var array = [];
    // for (var i = 0; i <= array.length; i++){
    //     array.push[i];
    // }
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
