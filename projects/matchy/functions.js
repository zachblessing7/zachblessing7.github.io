/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Creating a search function that takes two parameters. 
//create a loop to search through the valuearray. once that is done, we will compare the name property at the indicated indexed object in the array. 
//if the name in the object in the valueArray is equal to the name given as a string, return the object at index i in the ValueArray.
function search (valueArray, valueString){
    for (var i = 0; i < valueArray.length; i++ ){
        if(valueArray[i].name.toLowerCase() === valueString.toLowerCase() ){
            console.log("This is the value: " + valueArray[i].name);
            console.log("the value string" + valueString);
            console.log(valueArray[i], "Array!");
            return valueArray[i];
        }
        
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a replace function that loops through the animals array of objects and compares it to the name parameter given. 
//if the name property in the object at index i of the animals array equals the name parameter given, replace the animal at the given index using the replacement function that is a parameter. 
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++ ){
        if(animals[i].name.toLowerCase() === name.toLowerCase() ){
            animals[i] =replacement;
            
        }
}
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Here we are creating a remove function that will loop through the animals array of objects. 
//if the name value forced to lower case matches the name parameter given, remove that animal object. 
//used the splice method to remove at the given index i
function remove(animals, name){
    //var loweranimals = animals.map(names => names.toLowerCase());
    //console.log("lowercase" + animals);
    for (var i = 0; i < animals.length; i++ ){
         if( animals[i].name.toLowerCase() === name.toLowerCase() )
        {
            console.log('before splice ' + animals);
            animals.splice(i);
            console.log('after splice ' + animals);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Here we want to create a function that will add an animal to the animals array of animal objects. 
function add(animals, animal){
    //Animals = [] Animal = {}
    console.log("Animals!! " + animals);
    console.log("Animal!" + animal);
     
    if ( animal.name.length > 0 && animal.species.length > 0){ //here we are checking if there is any value in the animal object. 
        if ( !animals.length){ //if there is no length in the animals array, then we will push the animal object into the animals array. 
            animals.push(animal); 
        }
        for (var i = 0; i <= animals.length; i++ ){ //making a for loop to search through the animals array and if the name doesnt match any of the other animal names, we will add it with the push stmt below. 
            if ( animals[i].name.toLowerCase() === animal.name.toLowerCase() ){
                return;
            } 
        }  
    animals.push(animal);
    } 
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
