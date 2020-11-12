/**
 * FUNCTIONS:
 *
 * 0. A function allows us to enclose a block of code. the great thing about functions is that we can execute that block of code
 * whenever we want and however many times we want. This keeps us from having to write code over and over to esentially do the same task. 
 * 
 *
 * To create a function we use the keyword function
 *
 * There are 2 phases of using functions: declaration and call/invocation.
 */
 
// 1. Declaration //
function functionTest(){
    //function body/block code -  the code that will be executed. examples are console.log and return stmts.
}
//At the declaration phase -- the function "functionTest" can esentially create placeholders or variables to be used in the functions's block code. These are called parameters.


function add(num1, num2){
     return num1 + num2; //Returns the answer to "num1" + "num2" We have no values to pass through the function yet. this will happen during the function "call"
}

// In this example, the function "add" takes in two parameters. These parameters are set so that different data can be passed through the function which avoids rewritting code over and over to do the same task. 

// We can add as many parameters as we like
// braces "{ }" is considered the "function body" or block code. 
// a function doesn't have to take in parameters.

 
 // 1. Function Call //
 // After we declare a function we have to "call" by passing in the values we want to evaluate using our code body.
 
 //parameters are only placeholders for our values. In order to use the values we have
 // to "invoke" our function by creating a function call.
 
 
 console.log(functionTest()); //Function call on the above functions. There are no values in this function call so this will return the function body normally. However, this will print undefined because we have no code or task to perform in our body of functionTest()
 
 //Example of a function call with values:
 add(5,10); //We're calling our earlier function "add" that takes in values.

// This line of code takes in 5 and 10 as the input to our "add" function. The values or arguments then take the place of the stored parameters of our function. 


//2. Difference between function parameters and arguments. 
    //Function parameters are basically a variable that we create within our function. So parameters are names listed in the function's definition. 
    //Function arguments are the actual/real values that we pass into our function. 
function multiply(num1, num2){ //so in this function we see an example of two parameters that we can store values in for our funtion when we call the funtion.
    return num1 * num2;        //our parameters are num1 and num2. We can pass any number into this function by setting these parameters. 
}  
multiply(2, 3); //Here we have our funtion call and can see that we are passing real values of 2 and 3 into the parameters num1 and num2. 

// 3. Syntax for a Named Function//
    // the syntax for a named function follows the example above. 
function subtract(num1, num2){ //Here we see that we have set the name subtract for our funtion. we open parenthesis so we can add whatever parameters we need for our function. 
    return num1 - num2;        //Then we will open up the block code with the {}. the return stmt is the action that our function will perform. 
}
subtract(2, 1);

//4. Assigning a function to a variable.//
    //We can assign a function to a variable just like we would with any other complex or simple data type. 
var testFunction = function(param1){
    console.log(param1 += 'this is assigning a function to a variable');
};
testFunction('Oh yeah! '); //here we have taken a function and assigned it to the variable testFunction. So we could call testFunction later in our code without having to type out the function over and over again.

//5. Specifying inputs and outputs//
    //Functions are made to do a wide range of tasks or calculate values. We have several instances where we can specify the inputs by the parameters and the values we pass into these parameters. 
    //We also can specify the outputs by manipulating the block code and coding to have our return statement fit not only our function but the overall purpose of our code. 

//6. Scope for functions//
    //Each function creates a new scope. Scope determines the accessibility of these variables. Variables defined inside a function are not accessible from outside the function. Block Scope.
    //So within the curly braces {} of a function we know that the variables declared here are block scope and those block scope variables can not be call from outside the function. 
    //outside of the block code, we know these types of variables as global scope. 
    
// function scopeTest(num1){
//     var num2 = 5;
//     console.log(num2);
//  }

// console.log(num2); //in this function example here console.log(num2) inside the block code will return 5. However, the console.log(num2) outside of the block code will give us an error stating that num2 is not defined. 

//7. Function Closures //
    //a closure gives you access to an outer function's scope from an inner function. So according to Javascript closures are created everytime a function is created. 
    //so if a variable is inside an outer function's block code, and another function is inside that same outer function's block code. the latter function will have access to the variable created in the parent function. 
    
function closureTest() {
  var name = 'John'; // name is a local variable created by the function closureTest.
  function closureName() { // closureName is the inner function, a closure
    console.log(name); // use variable declared in the parent function. prints John to the console.
  }
  closureName(); //Here we verify that we can call the function closureName and it will still print John to the console eventhough the name variable was not set up in the closureName() function
}
closureTest();