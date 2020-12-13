//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// input is an object
//output is an array of the objects values

//lets first create the array to hold the values;

const arrayToBeReturned = [];
 
//lets loop through the object grabbing all the values.

for(var key in object){
    //inside of loop put object value into array
    
    arrayToBeReturned.push(object[key]);
}
 
 //once the loop finishes we will return the array 
 
 return arrayToBeReturned;
 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space
function keysToString(object) { 
    return Object.keys(object).join(" "); //Will return the keys of the parameter object. 
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
   var str = "";
if (Array.isArray(object)){
    for ( var i = 0; i < object.length; i++){ //if the object is an array, loop through the array and if object's data type returns string with the typeof method, return the string values in the empty string str. separated with a space.
        if ( typeof object[i] === "string")
         str += object[i]+ " "; 
    }
} else if (typeof(object) === "object"){ //if the object is an object. loop through the object with a for in loop. if the value assigned to the key is string after the typeof method, return the values in a string separated with a space. 
    
    for (var key in object){
        if(typeof object[key] === "string"){
            str += object[key] + " ";
        }
    }
        
    } str = str.trim();
      return str;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object
//assert.equal(arrayOrObject({a:"one"}), "object");
//assert.equal(arrayOrObject([1,2,{}]), "array");

function arrayOrObject(collection) {
   if (Array.isArray(collection)){ //take the parameter collection and test if it is an array or an object. return the string array or object depending on the result. 
       return 'array';
   } else if(collection === '{}' || typeof collection === 'object') {
       return 'object';
   }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); //one word string and return the string with only the first letter capitalized. 

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { //Ask Ryan about this one as well. 
     return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); //using the function to uppercase the first letter and lowercase the rest. Need to apply this function to all the words in the string.
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!'
// assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
//assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
return 'Welcome ' + object.name.toUpperCase().charAt(0) + object.name.slice(1) + '!'; // we need to return the value from the name key in the object. we need to capitalize the first letter by using the .charAt() method. 
    // console.log("Welcome " + Object.values(object).join(" ").charAt(0).toUpperCase().slice(1)  + '!');
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name and a species and return '<Name> is a <Species>'
//assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
//assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
function profileInfo(object) {
    return object.name.toUpperCase().charAt(0) + object.name.slice(1) + " is a " + object.species.toUpperCase().charAt(0) + object.species.slice(1);
} //we need to once again take the two values from the two keys in the object and capitalize the first letter. we need to add this to the string. 

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
//assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
//assert.equal(maybeNoises({noises: []}), "there are no noises");
//assert.equal(maybeNoises({}), "there are no noises");
//   if (object.noises.length > 0){
//       return object.noises.join(' ');
//   } else if(object.length < 0 || object === {} || object === "{}") {
//       return 'there are no noises';
//   }
  
  if(Array.isArray(object.noises) && object.noises.length > 0){
      return object.noises.join(" ");
  }else {
      return "there are no noises"; //pass in the parameter object and take the values from the key value pair. Then we need to see if it is an array and that it is not empty. 
  }                                 //if it is an array and not empty. join the values as a string. if it is not an array return there are no noises. 
   
   
   
   
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
string.split(" ");
if(string.includes(word)){ //take the string and turn into an array separating by space. then see if the word is included in the new array. if it is return true. if not, return false. 
    return true;
} else {
    return false;
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//Should take a name and an object and add the name to the object's friends array then return the object"
//Add the name to the object friends array.
//friends is key in object //name push into array //return whole object
object.friends.push(name);
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if (Object.values(object).length === 0 || Object.values(object).length === '0'){ //if there are no values in the object return false. if there are values in the object. check if the name is included, return the name. 
    return false;
 }else {
         return object.friends.includes(name);
}
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//loop through array and utilizing the <name> parameter friends array as reference. If someone is not in the persons friend array 
//add them to the notFriends array. 
let notFriends = [];

for(let i = 0; i < array.length; i++){
// if the object we are currently at is equal our name parameter ignore.
//AND
//if the objec we're currently at is inside of the <name> parameter array ignore. 
    if(array[i]['name'] === name || array[i]['friends'].includes(name)){
        continue;
    } else{
        //if it doesnt pass those two conditions add to notFriends
        notFriends.push(array[i]['name']);
    }
}
    
  return notFriends;  
    
    
    
    
    
    
    
//  for (var i = 0; i <= array.length - 1; i++){
//      console.log("line 135 " + array[i].name.push());
//  }

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
// object = {a: "one", b: "two", "hokey": false};
// assert.deepEqual(updateObject(object, "b", "three"), {a:"one", b:"three", hokey: false});

object[key] = value; //update the property with the value parameter. 

console.log(object.key);
return object;
    
    
    
    }




//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"
//var object = {a: "one", b: "two", "hokey": false};
//removeProperties(object, ["a","hokey"]);
//assert.deepEqual(object, {b: "two"});


//loop through object and compare keys to in array of strings
//for in loop

for (let key in object){
    //if key is inside of array we will delete it from object.
    if(array.includes(key)){
        delete object[key];
    }
}
//wait until the for loop is finished -- then return it
return object;

}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//Should take an array and return an array with all the duplicates removed
let newArray = [];
array.forEach((c) => {            //forEach will loop through the array and check to see if the new array contains anything. if it doesnt contain values. push the values to the array. 
    if (!newArray.includes(c)) { // create a new array to hold results. 
        newArray.push(c);        // if the array does not include the value. push the value into the array. 
    }
});

console.log(newArray);
return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}