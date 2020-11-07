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
   if(Array.isArray(value)){
       return true;
   } else {
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
     if (Array.isArray(value)){ 
        return 'array';
    } else if(value instanceof Date) {
        return 'date';
    } else if(value === null){
        return 'null';
    } else if (typeof value === 'object'){
        return 'object';
    } else if(value === true || value === false) {
        return 'boolean';
    } else if(typeof value === function(){}){
        return 'function';
    } else if(value === ''){
        return 'string';
    } else if(typeof value === Number()){
        return 'number';
    }else{
        return 'undefined';
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




