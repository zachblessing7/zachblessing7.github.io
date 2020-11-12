/*
* VARIABLES:
*
* 0. Variables are an incredibly important part of coding. One way to think about variables is to picture yourself packing boxes for a move. 
* First thing you want to do is figure out what you can label this box. For example, I would lable one of the boxes clothes. When we place the label on the box
* We are esentially declaring the variable. Next, we want to put some object or material in our box. Placing the clothes inside the box is esentially the same as assigning the variable. 
* Variables can store several types of data just like you would have different types of things in different boxes when moving. 
* Some of the data types that can be assigned to a string are Strings (phrases that are enclosed by ""), a number, a boolean (which is esentially true or false), an array [1, 3, true, 'string'], or an object {name:zach; hobby: drumming}, or
* Another data - type. If you have taken any algrebra classes you will have some idea of variables like x or y and how much easier they can make coding. 
* Variables can be re-assigned values as well. 
*
* 1. To create a variable we use the keyword, var, and we then can assign it a value. so for our above example. Var boxOfClothes = 4. In this example we have both declared AND assigned a variable. 
* Esentially, we are declaring the box and naming it. the value we assign it is based off the goal of the variable. Here, we are stating that boxOfClothes stores the value 4. Variables can store several types of data as well. 
* // declaration //
/* So here we are ONLY declaring the variable. We are letting Javascript know that we intend on using this variable in our future code. We have not told our code anything about what we will store inside of the variable (or box)
*
*/
var boxOfClothes; //--> this will let Javascript know we intend on using this variable in our code. We have not stored a value yet. 
console.log(boxOfClothes); //--> this will output undefined to the console. In other words, undefined will PRINT to the console screen.  
/*
* At the declaration phase, the variable boxOfClothes is undefined because we have NOT initialized or assigned 
* it to anything
*/

//initialization or assignment //
/* This step will tell Javascript what we intend on storing inside of our boxes for moving. Once we have assigned a value. our code will know that when we use the declared variable name, we are intending to use the value stored inside of it. 
*/
boxOfClothes = 'clothes'; // notice here we did not have to use the var keyword since we already declared it above. This is the same process of re-assigning a value to a varible but since we did not assign a value above, we will need to do it here. 
console.log(boxOfClothes); // prints => clothes to the console screen. 

// re-assignment //
boxOfClothes = 'old clothes'; // in this line of code. we have told Javascript that we no longer want to store the string 'clothes' in boxOfClothes, but we want to reassign the string 'old clothes'
console.log(boxOfClothes); // prints => old clothes to the console screen. 
/*
*
* 2. var, let, const. In this section we will talk about the different types of variable keywords we can use and each one's use. 
* //var // When using the keyword var we are telling Javascript that are making the variable globally scoped meaning we can update and redeclare within its scope. Since var is globally scoped -- 
* We are able to update and redeclare throughout most parts of the code. 
*/
var boxOfToys = 4;
console.log(boxOfToys); //--> this will print to the console screen 4. Since var is global scope, we can change this variable easily unless it is block scoped. Which brings us to let and const.

/* //let// the let keyword makes a varialbe block scoped and can only be updated but not redeclared. The block scope means that the let keyword assigns a value to the variable within the 'block' of code so for an object or funtion between the {}./
* If we look below, we can see that we are declaring the varialbe greeting and assigning the string 'Hello'. We are able to update the variable greeting since it is in the same scope. 
*/ 
let greeting = "Hello";
greeting = "say Hi instead"; // we will successfully update the greeting variable to the new string "say Hi instead"
console.log(greeting); //--> this will print to the console screen. "say Hi instead"

/* now we will look at an error example of trying to redeclare a let keyword variable. 
*/
//let greeting = "say Hi";
//let greeting = "say Hello instead"
//console.log(greeting); //--> will receive an error stating that greeting has already been declared. 

// const // -- now we will look at const. Const is pretty self explanatory when you think of constant. these variables maintain a constant value. 
/* const variables are also block scoped but can not be updated or redeclared.
*/ 
//const greeting = "say Hi";
//greeting = "say Hello instead";
//
//const greeting = "say Hi";
//const greeting = "say Hello instead"; //-- both of these will produce an error. 

/* 3. Hoisting. Hoisting usually suggests that declaring varialbes are moved to the top of your code before the code is executed. 
* in actuallity, hoisting moves declaration to the top of the particular scope mentioned above. Hoisting leaves the assignments in place. 
* one example is calling a function like console.log before you write them in your code. 
*/

console.log(typeof variable); // the typeof command outputs the data type. in this case variable was never declared so it initially stores a value of undefined becasue of hoisting.