// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
   if(Array.isArray(value)){  //check if the array is an array value. return true
       return true;
   } else {  //if not an array return false
       return false;
   }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if the value is an array return false
    if(Array.isArray(value)){
        return false;
    } else if(value instanceof Date){
        //if value is a date object return false
        return false;
    } else if(value === null){
        //if value is null return false
        return false;
    } else if(typeof value === 'object'){
        //if value is object return true
        return true;
    } else {
        // else it must be a boolean, string, or number return false;
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)){ 
        //return true if the value is an array
        return true;
    }  else if(value instanceof Date) {
        //date is not an array or object int to be a collection, return false
        return false;
    } else if(value === null){
        //Objects can hold the value null. So dont run the object else if line above the null clause
        return false;
    } else if (typeof value === 'object'){
        //typeof will return the string of whatever data type is passed through. except the above mentioned few. 
        //return true if Array or an Object intended as a collection
        return true;
    } else {
        //all booleans, strings, and numbers will return false.
        return false;
    } 
    

    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
     
    if(value instanceof Date) { //if the value passed in is a date, return the string date.
        return 'date'; 
    } else if(value === null){ //if the value passed in is null, return the string null. null is considered an object in Javascript so we mush put the object conditional stmt after this.
        return 'null';
    } else if (value === 'object' || value === "{}"){ //if the value passed in is an object or {}, return the string Object.
        return 'object';
    } else if (Array.isArray(value)){ //if the value passed in is an array, return the string array.
        return 'array';
    } else if(value === true || value === false) { //if the value passed in is ture OR false, return the string boolean.
        return 'boolean';
    } else if(value === function(){}){ //if the value passed in is a function, return the string function.
        return 'function';
    } else if(value === ''){ //if the value passed in is a string, return the string 'string'.
        return 'string';
    } else if(value === Number()){ //if the value passed in is a number, return the string number.
        return 'number';
    } else if((value === undefined) || (value === 'undefined')){ //if the value passed in is undefined or the string 'undefined', return the string 'string'
        return 'string';
    } else { //for any other data type passed through, return the typeOf the value that was passed in. 
        return typeof value;
    }
    
    
    

    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}




