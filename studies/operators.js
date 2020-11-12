/** OPERATORS
 * 
 * 0. Operators used to assign or compare values, perform arithmetic operations, evaluate expressions, and more.
 * we use operators all the time in everyday life and thinking. We can compare the length of two sticks for example or add the total of our grocery bill.
 * Javascript has both binary and unary . binary requires two operands so x > y, unary requires one (think of i++) where the value of i is incremented by 1.
 * there are several types of operators in Javascript. there are also ternary operators that require 3 operands. 
 * 
 * 
 * 
*/

//1. Assignment operators//
    // assigns a value to its operand. This is how we assign variables. 
var test = "this is a test";
console.log(test);
    //there are also assignment operators that can perform different tasks or calculate values. 
    //some examples are (+= -- so x += y --> is x = x + y) , -= , *=

//2. Arithmetic operators//
    //Think of your highschool math class. you use operators all the time like + , - , *, /, %
    //Arithmetic operators take numerical values as their operands and returns single numberical value.
console.log(1 * 5); //prints 5
console.log(5 / 5); //prints 1
console.log(12 % 4); //the remainder is 0 when 12 is divided by 4. 

var x = 3;
console.log(++x); //prints 


//3. Comparison operators//
    // comparison operators are pretty intuitive. these are our greater than, less than, equal.
    //note that in Javascript === means strictly equal and == means equal (less strict.)
var test3 = 3;
console.log(test3 === '3'); // this will print false because the number 3 is not STRICTLY equal to the string value "3".
console.log(test3 === 3); // will print true
console.log(test3 > 4); // this will return false.


//4. Logical operators//
    //the logical operators are AND, OR, and NOT.
    //These are regularly used when looking at conditional statements. 
function daylight(time1, time2){
    if (time1 > 5 && time2 < 17){
        console.log("the sun is still out"); // this function daylight compares two times 24 hour days. and checks if the sun is still out using a logical operator. 
    }
}
daylight(7, 10);


// 5. Unary operators (!, typeOf, -)//
    //unary operators work on only one operand and are pretty intuitive.
var a = 10;
console.log(+a); // 10
console.log(-a); // -10

var f = false,
    t = true;
console.log(+f); // 0
console.log(+t); // 1 this code shows how boolean values also can be expressed by numeric values where false is 0 and true is 1


//6. Ternary operator (a ? b : c)
    //Ternary operator is the only operator that takes 3 operands. can have one of two values based on a certain condition. 
function checkAge(age){
   var status = (age >= 21) ? 'drinking age' : 'no beer for you';
console.log(status); 
}
checkAge(10); // This code checks to see if the condition is true (old enough to drink), the operator has a value of 'drinking age'. If false, "no beer for you"
 //by passing in the argument 10 we see that 10 is not the age of someone who should be drinking alcohol.  