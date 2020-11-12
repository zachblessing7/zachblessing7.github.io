// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
 for (var i=1; i <= 100; i++){ //created a loop that will loop through the values 1 - 100 inclusive.
    if (i % 15 == 0){ //conditional stmt saying that if i (input value) is a multiple of 3 and 5, in other words if the number can be divided evenly by 15 (3 and 5's LCM) with no remainder print FizzBuzz to the console. 
      console.log("FizzBuzz");  
    } else if (i % 3 == 0){ //if the number is a multiple of 3 but not 5 the code will come to this conditional stmt. so 6 would be false for the first conditional stmt and will return true at the second conditional stmt. if this stmt is true print Fizz to the console.
      console.log("Fizz");
    } else if (i % 5 == 0){
      console.log("Buzz");  //if the number is a multiple of 5 but not 3, it will return false for the first two conditional stmts and pass to this else if stmt. If this is true print Buzz to the console. 
    } else {
     console.log(i); // if the number passed is not a multiple of any of these numbers, so if there is a remainder after processing all of the other conditional stmts. print to the console the number that was passed in. var i.
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}