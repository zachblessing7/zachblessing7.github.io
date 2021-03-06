// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function with value parameter
    return function (value) {
        //if the value argument is greater than the base argument, return true
    if (value > base) {
        return true;
    } else {
        //if the value argument is less than the base argument, return false. 
        return false;
    }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
      return function (value) {
        //if the value argument is greater than the base argument, return true
    if (value < base) {
        return true;
    } else {
        //if the value argument is less than the base argument, return false. 
        return false;
    }
    };
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function (value){
       if (value[0].toLowerCase() === startsWith.toLowerCase()){ //if the parameter value index 0 of the string forced to lowercase strictly equals the start with single character lower case, return true.
          return true;
       } else {                                                  //if the string does not start with the letter that is the same as the startsWith single character, return false. 
           return false;
       }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function (value){
       if (value[value.length - 1].toLowerCase() === endsWith.toLowerCase()){ //take the last index of the value input and compare to the endsWith single character. if they strictly equal, return true. both are forced to lowercase so it can be strictly compared.
          return true;
       } else {                                                             // if the last index of the string and the endsWith single character do not strictly equal, return false. 
           return false;
       }
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // Input: an array of strings called strings ===> ['a', 'b', 'c']
    // Function going inside of modify ===> function(string) { return string.toUpperCase(); })).to.eql(['A', 'B', 'C']);
    var arrayToHoldResultsFromModify = [];   
    // loop through strings
    for(var i = 0; i < strings.length; i++)      {
        // pass the item[i] of the array strings to the modify functions and push the results
        // to our array data structure using push
        arrayToHoldResultsFromModify.push(modify(strings[i]));
    }
    //return the array after it has been modified
    return arrayToHoldResultsFromModify;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
     // loop through strings
    for(var i = 0; i < strings.length; i++)    {
                
     // pass the item[i] of the array strings to the test function
    var testResult = test(strings[i]);
    if(!testResult) {
        return false;
        }
    } 
    return true;

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}







