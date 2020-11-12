/**
* DATA TYPES:
*
* 0. Data types are the building blocks of coding and play an extremely important role. There are several types of data used in Javascript and most are intuitive. 
* Data types basically tell what kind of data can be stored and manipulated within a program. There are two main categories of data types: 1. primitive 2.Complex
*
* 1. Simple data types include Number, String, Boolean, undefined, null, NaN (not a number), and positive/negative infinity.
* 
* 2. Complex data types include Arrays, Objects, Functions
* 
*/

// 1. Number//
    //Javascripts sees numbers as Simple data types. 
   // A number is exactly how it sounds. We use them in everyday life, math class, and in coding.
   
var i = 7; // here we are setting the variable equal to the simple data type of a number. You do not need any quotations around the number like you would need for a string. 
console.log(i); // will print to the console 7.

// 2. String//
    //Javascript sees string values as Simple data types.
    //Strings are used in JavaScript all the time. The paragraphs and words on your webpage are considered strings. 
    //Strings are housed in quotations and lets JavaScript know you are displaying the text housed in these quotations. 
    //There are several ways to manipulate strings and we will cover this in the string manipulations section. 

var j = "This is a string"; // we are assigning a string value to the variable j.
console.log(j); //this will print to the console. This is a string. notice how the quotations are not actually displayed on the console. 
    

// 3. Boolean//
    //Javascript sees Boolean values as Simple data types. 
    //Boolean values basically hold the value true or false. Booleans are great to use when you have yes or no/ true or false questions that need to be answered. 
    //For example, If a school has separate sides of the cafeteria, separated by boys and girls. We could run javascript code that would place boys on the right side and girls on the left. 
    //So it would look like this. if(boy === true) so if a boy is passed through the system -- it would place them on the right, if a girl -- the left. 
var boy = true; //setting the boolean value true to the variable boy. notice how we do not need quotes or to upper case the first letter. 
console.log(boy);

// 4. Array //
    //Arrays are considered Complex data types. 
    //Arrays are denoted by [] and house all types of simple data types in them. for example 
var myArray = [1, true, {name: 'john'}, 'this is a string']; //Notice that you can have all types of simple and complex data types housed in an array
console.log(myArray); // will print [ 1, true, { name: 'john' }, 'this is a string' ] to the console. 
    //JavaScript keeps track of the order/placement of data in an array by INDEXES. so index 0 would be 1 in our myArray array. 
console.log(myArray[1]);// this finds the value at index 1 of myArray and prints 1 to the console. 

// 5. Object //
    //Objects are considered Complex data types. 
    //Objects are displayed in {} and house what are called key - value pairs or PROPERTIES. 
var myObject = {name: 'John', hobbies: ["drumming", "gaming"], fear: 'heights'}; // we are placing stings and an array of strings inside the object myObject. 
console.log(myObject);// this will print the entire object to the console. {name: 'John', hobbies: ["drumming", "gaming"], fear: 'heights'}.

// 6. Function // 
    //Functions are considered Complex data types. 
    //Functions are used just like we use them in math. If you have seen f(x) in your highschool math class, you might have an idea of what is happening here. 
    //functions are esentially procedures or a set of statements that performs a task or calculates a value. 
    //Think of functions like like taking roll for a class -- your function would be set to check if a student is here or not. so you would pass through names of students into your function and return 'here' or 'absent'
function rollCall(name) {   //here we are taking a function rollCall and passing in name as the parameter. 
    console.log(name + ' is present'); //the rollCall function's task is to print to the console. the name passed throug and " is present"
}
rollCall('john'); //this is where we call the function and pass in the name. so the console will print john is present.

// 7. undefined//
    //Undefined is considered a simple data type. 
    //undefined indicates a variable has not been defined. 
var k; // since we did not set k equal to a value. undefined will print to the console. remember that you can set a variable to the value undefined as well. 
console.log(k);

var h = undefined; //notice how it does not need quotes. 
console.log(h); //prints to the console undefined. 

//8. null //
    // null is considered a Simple data type. null can also be an object value. 
    // null is the absence of any value. it is also considered falsy (false) for boolean operations
var z = null;    
console.log(z); //will print null to the console. notice this does not need quotes. 

// 9. NaN //
    //Considered a simple data type. 
    // stands for Not a number. 
var t = NaN;
console.log(t); //prints NaN to the console. 

// 10. infinity and - infinity//
    // positive infinity is used to represent a value greater than any other number.
    // negative infinity is used to represent a value less than any other number. 
    //Infinity is displayed when a number exceeds the upper limit of the floating point numbers
var result = typeof (Infinity);// the type of command will return what data type infinity is
console.log(result); //prints number to the console.

//11. Primitive vs complex data//
    //Primitive data types are immutable meaning the value can not be changed
    //Primitive data types are Number, String, Boolean, undefined, null, NaN (not a number), and positive/negative infinity.
    //Complex data types are mutable meaing the value can be changed. 
    //complex data types are Arrays, Objects, Functions.

var complex = [1, true, 45];
complex.push('add this string'); //in this code we have a complex data type (array) that we can change the value by adding "add this string"
console.log(complex);

var simple = 'this is a string';
simple = 'new string';           // in this code we can see that we reassign a string value to the var simple but we have no way to change the actual value of the string. We can manipulate but not change. 
console.log(simple);

//12. Copy by value vs copy by reference//
    //simple data types are copied by value. 
var test = 2;
var test2 = test;
console.log(test2); // in this code we see that the value 2 is copied to a new variable test2 so test2 = test

    //complex data types are copied by reference. meaning Whenever a variable that points to a complex data type is referenced by another variable, a copy of the reference that the variable is pointing to is created.
var complexTest = {name: 'john'};
var complexTest2 = complexTest;
console.log(complexTest2); //this code has created a reference of the object that complexTest first pointed to.
