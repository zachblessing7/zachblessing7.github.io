/**
* LOOPS:
*
* 0. Loops are an extremely important part of coding and avoiding severe headaches. Loops allow for us to pass through different complex data types and perform tasks or calculate values.
* Loops allow us to parse through large amounts of data and run test and evaluate different things. 
* The types of loops are "while", "for", and "for-in" loops.
*
*/
// 1. While Loops //
    // While loops keep going over the input data until the statement returns a value of false.
   
var test = 0;              
while( test < 20 ) {        //for this while loop, we are inputing the value 0 and testing if it is less than 10. This is true so the code now knows to execute the code in the body.
                                
    test += 2;              //this is essentially saying that test = 0 + 2. or test = test + 2. So while the while stamentment remains true. increment by 2. until we hit our stop parameter 20. 
                           
    console.log(test);   //prints to the console our out put from the while loop. so 2,4,6,8,10,12,14,16,18,20
}


// 2. For Loops //
    //For loops are doing the same as the while loop but in a different format.
for (var i = 0; i <= 12; i++) { //so we set a variable in the loop to house our changing value. so it starts at 0. if 0 is less than or equal to 12, then take the input stored in i --- 0 and increase by 1 each time we loop. 
    console.log(i);// here we want to print to the console all the outputs that this for loop will produce. it will keep looping through and incrementing by 1 until i is equal to 12. once this is done. the loop knows to stop and the code stops producing outputs. 
}                   //prints 0,1,2,3,4,5,6,7,8,9,10,11,12

//Looping Over An Array\\
var bands = ["Rush", "BlackSabbath", "Journey", "Eagles"]; //An array of Classic rock bands.
for (var i = 0; i < bands.length; i++){ // Since this is an array remember our indexes. We are setting i to 0 and saying if 0 is less than the length of the array values (NOT indexes), increase i by 1 and execute the code (console.log()).
    console.log(i +" "+ bands[i]); // this will print the value passed into i as the loop executes and at the bands returned at each index as the for loop loops over our array of bands. 
}
//Prints 0 Rush 1 BlackSabbath 2 Journey 3 Eaggles

//Looping Backwards Over An Array\\
for (var b = bands.length - 1; b >= 0; b--){ // This loop is the same process but we want to loop backwords over our band names. we are starting at the last index of the array. (we get this by using the .length - 1). and looping backwords
    console.log(b +" "+ bands[b]);// we loop backwords because the last index is 3 and since 3 is >= 0 we decrease our value stored in b by 1. we do this until 0 >= 0 at this point the code will print the reverse order of our outputs from above.
}
//prints 3 Eagles 2 Journey 1 BlackSabbath 0 Rush

// 3. For-In Loops //
var albums = { 
    Rush: 19,
    BlackSabbath: 19, 
    Journey: 7,
    Eagles: 10
};
for (var key in albums){ // a for in loop --- loops over the properties of an object. Here our object is albums. with the key value represented by the band name and the value is the number of studio albums. 
    console.log(albums[key]); //The code loops over the properties and will return the values. so in this case the number of albums starting with Rush and ending at Eagles. Once the loop is done the code will print:
}                               // prints 19 19 7 10
