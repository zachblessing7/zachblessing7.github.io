// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //make contact should return an object with the person contact info
    return { 
        id: id,
        nameFirst: nameFirst, //setting up the funtion to return the objject housing the contact info. 
        nameLast: nameLast,
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // create an empty array to house the contact list.
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length; //this funtion will return the length of the contact array. 
        }, 
        addContact: function(contact){
            //reference contacts array and add the contact argument into the array
            contacts.push(contact);
        },
        findContact: function(fullName) {
          for(var i = 0; i < contacts.length; i++) { //for loop to loop through the contacts array and find a match between fullName and the nameFirst and nameLast values concatenated as a string.
            let toMatchFullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`; //if the fullName value and the nameFirst and nameLast values listed as a string strictly equal, return the contacts info that matches the for loop search.
            if(fullName === toMatchFullName) {
              return contacts[i];
            }
          }
        },
        removeContact: function(contact) {
          for(var i = 0; i < contacts.length; i++) { //for loop to loop through the contact array and check to see if the parameter value contact id strictly equals the contacts array id at the specified index after looping. 
            if(contact.id === contacts[i].id) {
              contacts.splice(i, 1); //.splice will take the contacts array at index I and remove one contact from the array.
            }
          }
        },
        printAllContactNames: function() {
          var namesToReturn = ''; //create an empty string to hold our output of printed contacts.
          for(var i = 0; i < contacts.length; i++) { //for loop to loop through the contacts array.
            namesToReturn += `${contacts[i].nameFirst} ${contacts[i].nameLast}`; // setting the namesToReturn variable to the nameFirst and nameLast concatenated string from index i
            if(i !== contacts.length - 1) { //if the index does not equal the last index -- take the nameFirst nameLast concatenated string with a line break between each. so in other terms. if the i value is not equal to the last index value of the contacts array, create a line break between each entry. 
              namesToReturn += '\n';
            }
          }
          return namesToReturn;
          
        }
      };
    }
  

        
    //     printAllContactNames: function (fullName){
    //         for(var i = 0; i < contacts.length; i++){
    //             if(fullName === contacts[i]['nameFirst'] + " " + contacts[i]['nameLast']){
    //                 console.log(contacts[i].join("\n"));
    //             }
    //         }
    //     }
        
    // };





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
