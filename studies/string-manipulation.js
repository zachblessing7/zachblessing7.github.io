/** STRING MANIPULATION
 * 
 * 0. String Manipulation is also known as string handling. This is the process of changing, parsing or analyzing strings. 
 * Strings are not stored as character arrays so built in functions are used to manipulate their value. You might be asking why strings are 
 * simple data types when we can manipulate them. This is because when you use some of the following built in functions to manipulate strings. These methods
 * are actually returning new strings. 
 * 
 */
 
 //1. String Manipulation with Operators//
    // On of the most common uses of string manipulation with operators is concatenation. 
 var string = 'This is my ';
 console.log(string += "Jam"); //we are using operators to take two strings and combine them together to form one NEW string. 
                               //prints This is my Jam
    
    // We also could concatenate by using a + sign
 console.log("This is my " + "Jam"); //Prints This is my Jam


//2. String Manipulation with String methods//
    //There are several types of methods to manipulate strings. each gives a new manipulated string. 
    //A few of the string manipulation methods are:

var string1 = 'Op Spark is ';
var string2 = 'the best!';
console.log(string1.concat(string2)); //This is the same as the above operator method. It takes 2 strings and combines them into 1 NEW string. 

console.log(string1.charAt(3)); //CharAt() returns a character at a specific location or index. 
    //since strings have index values similar to arrays, index 3 for "Op Spark is " capital S. Notice that spaces have an index value as well. Index values start at 0.
    
console.log(string1.toUpperCase()); //.toUpperCase takes the target string and returns a new sting with all capital letters. 
    //this will print OP SPARK IS

console.log(string1.toLowerCase()); //.toLowerCase takes the string and returns a new string that is all lower case. 
    //prints op spark is

console.log(string1.length); //will print the number of values in the string. Remember spaces are values of this string as well. 

var splitString = string1.split(' '); // this takes the string Op Spark is and creates a new array by splitting up the string where there are spaces. 
console.log(splitString[2]); // now that this new string is an array. we can print the 2nd index of the array. in this case 'is' (without quotes) is printed to the console.
    
console.log(string1.slice(3, 8)); //.slice takes parts of a sting and returns a new string. in this example we are starting at index 3 and ending at index 8 which is Spark.
    //prints to the console. Spark.