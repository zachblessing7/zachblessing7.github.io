// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if(Array.isArray(value)){
        return 'array';
    } else if (value === null){
        return 'null';
    }
    return typeof value;
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(arr, num){
    var newArray = [];
    if(!Array.isArray(arr)){
        return [];
    } 
    
    if (num === undefined || typeof num !== 'number' ){
        return arr[0];
    } else if (num > arr.length) {
       return arr;
    } else {
       for (var i = 0; i < num; i++){
           newArray.push(arr[i]);
    
       }
     
    } return newArray;
     
};





/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){
  var newArray = [];
    if(!Array.isArray(arr)){
        return [];
    } 
    
    if (num === undefined || typeof num !== 'number' ){
        return arr[arr.length - 1];
    } else if (num > arr.length) {
       return arr;
    } else {
       for (var i = arr.length - num; i < arr.length; i++){
           newArray.push(arr[i]);
    
       }
     
    } return newArray;
};   







/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, value){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === value){
           newArray.push(i);
            
        
        }
    }
     if(newArray.length > 0){
       return newArray[0];
   } else {
       return -1;
   }

};










/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (arr, value){
   var input = _.indexOf(arr, value);
   return true ? input >= 0 : false;
};








/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (c, func){
    if (Array.isArray(c)){
        for (var i = 0; i < c.length; i++){
            func(c[i], i, c);
        }
        
    } else {
        for (var k in c){
         func(c[k], k, c);
        }
    }
};









/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr){
 var newArray = [];
 for (var i = 0; i < arr.length; i++){
     if(!_.contains(newArray, arr[i]) ){
         newArray.push(arr[i]);
    }
  } 
  return newArray;
};





/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// _.each = function (c, func){
//     if (Array.isArray(c)){
//         for (var i = 0; i < c.length; i++){
//             func(c[i], i, c);
//         }
        
//     } else {
//         for (var k in c){
//          func(c[k], k, c);
//         }
//     }
// };

// _.filter = function(arr, func){
//     var newArray = [];
//     if(_.each(arr, func) === true){
//         newArray.push(arr);
//     }
//     return newArray;
// };





_.filter = function(arr, func){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){
            newArray.push(arr[i]);
        }    
    }
    return newArray;
};







/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if(!func(arr[i], i, arr) === true){
            newArray.push(arr[i]);
        }    
    }
    return newArray;
};




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func){
    
    var output = [[] , []];
    

    for (var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            output[0].push(arr[i]);
        } else {
            output[1].push(arr[i]);
        }
        
    }  
       
        return output;
      
  
    
};










/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (coll, func){
  var newArray = [];
    if (Array.isArray(coll)){
        for (var i = 0; i < coll.length; i++){
            newArray.push(func(coll[i], i, coll));
        }
    } else {
        for (var k in coll)
            newArray.push(func(coll[k], k, coll));
    
    }
        
        return newArray;
};








/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (arrObj, prop){
    var newArray = [];
    for(var i = 0; i < arrObj.length; i++){
        newArray.push(arrObj[i][prop]);
    }
    return newArray;
};




// _.pluck = function (arrObj, prop){
//     var newArray = [];
//  _.map(arrObj, function (prop){newArray.push(Object.values(arrObj))});
    
    
// };








/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// Takes in a collection and a function. 
// check whether there is a function or not. if not return true if EVERY element is truthy and false otherwise. 

// Check if the collection is an array or an object. 
// call that function for every element in the collection so coll[i]. 

_.every = function(coll, func){
 var results = [];
 var falsy = [false, null, undefined, NaN, 0, -0, ""];
   //If <function> is not provided, return true if every element is truthy, otherwise return false
    if (typeof func !== "function"){
       let counter = 0;
       for(let i = 0; i < coll.length; i++){
           for(let j = 0; j < coll.length; j++){
               if(coll[i] === falsy[j]){            //compare elements of collections with falsy[] array elements
                   counter++;
               }
           }
        } if(counter > 1){                         //if counter>1 it means there are falsy elements(they are in falsy[]) in collection
            return false;
            } else {
                return true;
            }
   } else {
       if(Array.isArray(coll)){
           for (var i = 0; i < coll.length; i++){
               results[i] = func(coll[i], i, coll); // if array
            }
        } else {
            let k =0;
            for(var prop in coll){
                results[k] = func(coll[prop], prop, coll); // if object
                k++;
            }
        }
       if(results.length > 0){
           if ( _.contains(results, false)){                    // If even one of them returns false, return false
               results = false;
           } else {
               results = true;
           }
       } else {
           results = false;
       }
   }
    return results;
};
    











/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (coll, func){
var results = [];
var falsy = [false, null, undefined, NaN, 0, -0, ""];
   //If <function> is not provided, return true if every element is truthy, otherwise return false
    if (typeof func !== "function"){
       let counter = 0;
       for(let i = 0; i < coll.length; i++){
           for(let j = 0; j < coll.length; j++){
               if(coll[i] === !falsy[j]){            //compare elements of collections with falsy[] array elements
                   counter++;
               }
           }
        } if(counter > 1){                         //if counter>1 it means there are truthy elements(they are in falsy[]) in collection
            return true;
            } else {
                return false;
            }
   } else {
       if(Array.isArray(coll)){
           for (var i = 0; i < coll.length; i++){
               results[i] = func(coll[i], i, coll); // if array
            }
        } else {
            let k =0;
            for(var prop in coll){
                results[k] = func(coll[prop], prop, coll); // if object
                k++;
            }
        }
       if(results.length > 0){
           if ( _.contains(results, true)){                    // If even one of them returns false, return false
               results = true;
           } else {
               results = false;
           }
       } else {
           results = true;
       }
   }
    return results;
};













/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (arr, action, seed){
  
  // we have two routes
  
  // if the seed/initial value is given
  if(seed !== undefined){     //if seed value passed, create a new var called result and initialize it to the seed value
    let result = seed;
                                //loop through the array starting at index 0 with the each function
    _.each(arr, function(element, index, array){ //assign the result of passing each element to the action function to the result var
         result = action(result, element, index);
    });
    
    
    return result; //return result to the next iteration
  } else {   //if the seed/initial value is NOT given
      
      //create new result variable and initialize it to the first element in the input array
       let result = arr[0];
      
      //with a loop for (let i = 1)
      //loop through the array starting at index 0 with the each function
      _.each(arr, function(element, index, array){
          if(index !== 0){
              result = action(result, element, index); //assign the result of passing each element to the action function to the result variable. 
          }
      });
      return result;
      
      
      
  }
  
  

    
};










// _.reduce = function (arr, func, s){
//   var pR;
//   for (let i = 0; i < arr.length; i++){
//       if(i === 0 && (s !== null && s !== undefined)){
//           pR = func(s, arr[i], i);
//       } else {
//           pR = func(pR, arr[i], i);
//       }
//   } return pR;
// };










/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (...obj){
  return Object.assign(...obj);
  
};



















//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
