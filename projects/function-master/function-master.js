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
    return Object.keys(object).join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
   if(Object.values(object) === {} || Object.values(object) === '{}'){
       Object.values(object).slice(3);
       console.log("line 43 " + Object.values(object));
   }
    console.log("line 42 " + Object.values(object).join(" "));
   return Object.values(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    if (collection === '{}' || collection === 'object' || collection === {} || collection === 'Object' || collection === Object){
        console.log(collection); console.log('object');
    } else if (Array.isArray(collection)) {
        console.log(collection); console.log('array');
    } else {
        console.log(collection); console.log(' that array');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { //Ask Ryan about this one as well. 
     return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!'
    console.log("Welcome " + Object.values(object).join(" ").charAt(0).toUpperCase().slice(1)  + '!');
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name and a species and return '<Name> is a <Species>'
function profileInfo(object) {
    console.log(object.name + " is a " + object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
    if (object.noises === '{}' ||  object.noises === {} || object.noises === [] || object.noises === '[]'){
        return 'there are no noises';
    }
        return object.noises.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
string.split(" ");
if(string.includes(word)){
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
if (Object.values(object).length === 0 || Object.values(object).length === '0'){
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
    if(array[i]['name'] === name || array[i]['name'].includes(name)){
        
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
    // if(Object.key(object) === key){
    //   var test = value;
    //   var test2 = key;
    //   console.log("this is the test " + object.test2[test]);
    //   console.log(object);
    //   console.log(key);
    //   console.log(value);
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
array.forEach((c) => {
    if (!newArray.includes(c)) {
        newArray.push(c);
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