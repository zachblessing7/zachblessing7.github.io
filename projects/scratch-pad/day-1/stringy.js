// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //Use the .length function to return number of characters in the parameter string in function length(). 
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //this code will return whatever value is passed into the toLowerCase function's parameter string.
    //.toLowerCase will return the string but force it into lowercase. 
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //this code will return the value passed into parameter string of function toUpperCase and force the string to Capitalize. 
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //there are a few ways to accomplish this task. I chose to take the input string parameter, split the string by the ' ' (space) which then puts each part of the string into separate strings inside of an array.
    //then take the strings and join it to one string separated by a dash (-). Finally, .toLowerCase will take our new string joined by a dash and force the string to lowercase.
   return string.split(' ').join('-').toLowerCase(); 
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //Need to create an if statment that compare the string and see if it starts with the value in the char parameter of the beginsWith function.
    //If stmt in our own words: look at index 0 of the string> force this letter to lowercase> compare that **lowercase** letter to the value stored in the char parameter which is also forced to lowercase to strictly compare the two.
    //If the above statement passes the test--in other words, if the first letter of the string strictly equals the value stored in the char parameter--- return true.
    //If the first letter of the string does NOT match the value in the parameter char, return false.
   if (string[0].toLowerCase() === char.toLowerCase()){
       return true;
   } else {
       return false;
   }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //This is very similar to the prompt above. We are going to use an if else statement to return either true or false. 
    //The difference here is that we are comparing the last letter of the string to the value in the parameter char of the endsWith function. 
    //the if statement in our own words --- take the last index of the value passed in the string parameter [string.length - 1] force this last letter to lowercase and compare it to the value passed into the char parameter. 
    //if the last letter of the string STRICTLY equals the value passed into the char parameter --- return true. If the last letter of the string and the value passed to the char parameter do NOT equal --- return false. 
    if (string[string.length - 1].toLowerCase() === char.toLowerCase()){
        return true;
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // This return statment takes the parameters stringOne and stringTwo values and adds them together as one string.
    // so we are asking for two separate strings to be added together (concatenated) and put into one single string. 
    return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);  //delcaring variable args and assigning it an array that will house all the arguments passed through it. 
    return args.join(''); // takes the new array of values and joins them together as one string. this string has no spaces. 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length){ // this conditional stmt says that if the length of string one is greater than string two, to return stringOne. 
        return stringOne;
    } else {                                  // If the first conditional if stmt is false, then return stringTwo. This takes care of both possiblities of either stringOne or stringTwo being longer. 
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // INTERNET WAY TO DO THIS
    // return stringTwo.localeCompare(stringOne);
    
    // OTHER WAY TO DO THIS PROBLEM
    if (stringOne < stringTwo){      // if stringOne is higher than stringTwo alphabetically, then return the value 1
        return 1;
    } else if (stringOne > stringTwo){ //if the oposite is true, return stringOne
        return -1;
    } else {                        // if both strings are equal in terms of alphabetical order, return 0
        return 0;
    }
}


    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
     if (stringOne > stringTwo){      // if stringOne is less than stringTwo alphabetically, then return the value 1
        return 1;
    } else if (stringOne < stringTwo){ //if the oposite is true, return stringOne
        return -1;
    } else {                        // if both strings are equal in terms of alphabetical order, return 0
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
