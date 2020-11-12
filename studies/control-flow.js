/**
 *  CONTROL FLOW:
 *
 * 0. Controlling the flow of our application refers to how we make decisions in our code by true or false / yes or no
 * questions. Once we have these questions answered, returns of true will allow the code in the body of the if statement to execute. If false, the code in the body is not executed and the system moves on to the next conditional statement.
 * The methods of control flow are referred to as  "If", "Else-If", "Else", and "Switch" statements.
 *
 */
 
 // 1. If //
    //If statements tell our program what to do if a conditional statement has a value of true.
 
 
 
 var time = 5; //We set a vairable time and made it equal 5
 
 if (time < 6){   //Since this if statment (conditional statement) is true -- the code in the body of this statement will run. (code between the curly braces {}).
                    
     console.log("Still early!"); //Prints to the console Still early! since our conditional statement has a value of true.
 } 
 
 // 2. Else-If //
    //Else If statements essentially asks another true or false question if the first if statemnt is false
    // Let's take a look at a code example of using "else-if".
 
 var time1 = 13; 
 
 if (time1 < 12){   
                  
     console.log("Still early!"); // so in this if else if statement. we take the value in time1 and run it through our conditions. the first condition <12 is false so the console.log is not executed and the code moves to the next line.
 
 } else if (time1 > 12) {   
      console.log("It's Mid day!");  // After returning false for the first statement, our code moves to the else if statment to see if this returns a value of true. It does! so our code will print to the console. It's Mid day!  
 } 
 
 // 3. Else//
    //Else statements essentially runs the code when all if statements are false 

 var time2 = 20; 
 if (time2 < 12){   
     console.log("Still early!"); //in this example we are passing in the value 20 into our conditional statments to test for true. so the first if statement returns a value of false--- so the code does not execute and moves to the next statement.
 
 } else if (time === 13) {    
      console.log("It's Mid day!"); //the code moves to the else if statment now to test if true or false. this stamement returns the value false. so It's Mid day! is not printed to the console. ---The code moves on. 

 } else {
   console.log("Getting late!"); // Here we are essentially saying that if none of the above statements return a value of true, we have a catch all code block to execute. so since 20 is greater than 12 and not STRICTLY equal to 13, Gettingg late! prints to the console.
 }
 
 //so remember that if a value of true is returned by any of our conditional statements, the code in the body executes. ONCE AN IF ELSE IF STATEMENT RETURNS A VALUE OF TRUE, IT EXECUTES THE CODE IN THAT CONDITIONAL STATEMENTS BODY AND DOES NOT MOVE ON TO THE OTHER CONDITIONAL STATEMENTS.
 //so esentially the last line of code only runs if the input time is greater than 12 and NOT strictly equal to 13.
 