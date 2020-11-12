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
function add(animals, animal){
    //Animals = [] Animal = {}
    console.log("Animals!! " + animals);
    console.log("Animal!" + animal);
     
    if ( animal.name.length > 0 && animal.species.length > 0){
        if ( !animals.length){
            animals.push(animal); 
        }
        for (var i = 0; i <= animals.length; i++ ){
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
