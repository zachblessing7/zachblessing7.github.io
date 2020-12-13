// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-zachblessing7");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./zachblessing7.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use the filter function, which takes the array passed to the outer function
    //as well as a function that takes a customer object as an argument. 
  let maleCustomers =  _.filter(array, function (customerObj){
        //filter out all male customers using the gender key in each object customer object. 
        return customerObj.gender === "male";
    }).length;
    //console.log(`this is male customers ${maleCustomers}`);
    return maleCustomers;
};






var femaleCount = function(array){
    var result = 'female'; //using a seed of zero, use the reduce function to add the number of "female customers"
    let femaleCustomers = _.reduce(array, function(n, customerObj){
        return n + (customerObj.gender === result); //if the gender matches "female", add the values and return the total count.
        
    }, 0);
        //console.log(`this is female customers ${femaleCustomers}`);
        return femaleCustomers;
};









var oldestCustomer = function (array){
var max = 0;
var oldestName = _.reduce(array, function(prev, curr){ //use the reduce function to return the name of the oldest customer. 
    if(curr.age > max){ // if the age is greater than 0, assign the name to the initial value and assign max variable to the current age.
        prev = curr.name;
        max = curr.age;
    }
        return prev; //returns the new name set for the prev variable and will start the iteration over. 
        
        
}, '');
return oldestName; // returning oldestName will make use of the reduce function and iterate over the array, setting the current oldest age as the initial value as it iterates again and again.
                    // the return value will be the name of the oldest customer.
};












var youngestCustomer = function (array){
  var max = 100; //following the same logic as oldestCustomer but switching the goal of the iteration. 
var youngestName = _.reduce(array, function(prev, curr){ //use reduce again to iterate over the array.
    if(curr.age < max){     //if the current age as we iterate is less than the value assigned to max, then set the initial value as the name. then assign the age of this customer to the max variable until we find the youngest age. 
        prev = curr.name;
        max = curr.age;
    }
        return prev; //returns the new name set for the prev variable and will start the iteration over. 
        
        
}, '');
return youngestName; //returning youngestName will make use of the reduce function and allow iteration over the customer names and ages, reducing to the youngest age and returning the customer's name after all iterations.
  
};









var averageBalance = function (array){
  var allBalancesAddedArray = 0; 
 
    _.each(array,function(customer,i,a){ //use the each function to iterate over the array. 
       
        allBalancesAddedArray += parseFloat(customer.balance.replace(/\$|,/g,'')); // going to add each balance up starting with zero so we can find the sum of the balances.
                                                                                //parseFloat will return a floating point number and we use the replace to get the string number to a number. 
    });
   
    return allBalancesAddedArray/array.length;   //allBalnacesAddedArray now holds the sum. we can divide by the array length to get the avg balance
    
    
    
    
//  var filteredData = _.map(array, function(customerObj){
//      return customerObj.balance;
//  }); console.log(filteredData);
//     let avg = _.reduce(filteredData, function(a, b){
//       return a + b;
//     }, 0) / filteredData.length;
//         console.log(avg);
 };





var firstLetterCount = function (array, letter){
    let firstLetter =  _.filter(array, function (customerObj){ //use the filter function to compare if the first letter of the customer name matches the letter parameter. 
         
        return customerObj.name[0].toLowerCase() === letter.toLowerCase();
    }).length; //use .length to give us the count of the customer's names that start with the input letter. 
   
    return firstLetter; 

};







var friendFirstLetterCount = function (array, customer, letter){
  
  var arrFriends;
    for(let i = 0; i < array.length; i++){
        if(array[i]["name"].toLowerCase() === customer.toLowerCase()){ //loop over the array and set the arrFriends variable to the name of the friends if the customer input and customer name match.
            arrFriends = (array[i]["friends"]);
        }
    }
   
    var counter = 0; 
    for(let i = 0; i < arrFriends.length; i++){
        if(arrFriends[i]["name"][0].toLowerCase() === letter.toLowerCase()){ // set a counter and see if the first letter of the customer's name matches the input/ parameter letter. 
            counter++;
        }
    }

    return counter; //returning counter will give us the final count of the customers that have friend's names that start with the input letter. 

};

    // var friendFirst = _.map(array, function (array, cust, letter){
    //     if (array.friends.name[0].toLowerCase() === letter.toLowerCase()){
    //         console.log( array.friends.name);
    //     } 
        
        
    // });
    
    // return friendFirst.length;
    








var friendsCount = function (array, name){
       let output = [];
    for(let i = 0; i < array.length; i++){
       for(let j = 0; j < array[i]["friends"].length;j++){ // loop over the array and then loop over the friends array within the array.
           
         if(array[i]["friends"][j]["name"] === name) output.push(array[i]["name"]); // if the friends name is equal to the input name. push the customer name into the empty array.
    }
}  
    return output; //return the new array that is filled with the customers that are friends with the input name.
};    
    
    
    
    
    
    // var count = _.map(array, function(customerObj, name){
    //     if (customerObj.friends.name.toLowerCase() === name.toLowerCase()){
    //         return customerObj.name;
    //     }
        
        
    // }); return count;
    









var topThreeTags = function (array){
let tagArray = [];

for (let i = 0; i < array.length; i++){
   let customerObj = array[i];
   tagArray = tagArray.concat(customerObj.tags);
}
    let tagCountObj = tagArray.reduce(function(finalTagObj, tag){
        if(finalTagObj[tag]){
            finalTagObj[tag]++;
        } else {
            finalTagObj[tag] = 1;
        }
        return finalTagObj;
    }, {});
    
    let countsArray = [];
   countsArray = Object.entries(tagCountObj);
   countsArray.sort(function(a, b){
       return b[1] - a[1];
   });
   
   let topThreeArray = countsArray.slice(0, 3);
   
   let topThreeWords = topThreeArray.map(function(tagSubArray){
       return tagSubArray[0];
   });
        return topThreeWords;
};
    
    
//   var tagCount = {};
//     // iterate over array
//     _.each(array, function(customer, i, a){
//         //iterate over customer.tags array
//         _.each(customer.tags, function(tag, i, a){
//             //if tag is no in object tagCount add it at = 0
//             if(!tagCount[tag]){
//             tagCount[tag] = 0;
//             }
//             // else add 1 to existing tag
//             tagCount[tag] += 1;
//         });
//     });
//     var resultArr = [];
//     // iterate over tag count object
//     _.each(tagCount, function(value, key, a){
//         // push int o result array objects with key and count this will show the tag and the repeated number
//         resultArr.push({tag: key, count: value});
//   });
//     var compare = function(a,b) {
//       //
//   if (a.count < b.count)
//       //
//     return -1;
//   if (a.count > b.count)
//     return 1;
//   return 0;
// };
// var sortedArr = resultArr.sort(compare);
// var topThree = _.map(sortedArr, function(e){
//     return e.tag;
// });
// return topThree.slice(-3);
// };   
    
    
    
    
    
    
    
    
//  var output = [];
//   var tagMap = {};
//   customers.forEach(function(customer) {
//     customer.tags.forEach(function(tag) {
//       tagMap[tag] = (tagMap[tag] || 0) + 1;
//     });
//   });
//   var sortedArr = Object.keys(tagMap).map(s => [s, tagMap[s]]).sort((a, b) => a[1] - b[1]);
//   output = sortedArr.slice(-3);
//   return output;















var genderCount = function (array){
    var nonBinaryCount = function(array) { //we already have the functions for male and female count. we need to set up a loop for the non binary customers
    var acc = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]["gender"] === "non-binary"){ //loop over the array and if the customer's gender is non-binary, add to the acc (counter) variable.
            acc++;
        }
    }  return acc; //this will return the count for non-binary customers. 
};
   let result = {}; //need to set an empty object to house the results. create keys and use the counts of the functions as the value in the properties. 
    result["male"] = maleCount(array);
    result["female"] = femaleCount(array);
    result["non-binary"] = nonBinaryCount(array);
    return result;  //return the new Object that has the desired properties.

    
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
