/**
 * Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
 */

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Berline',
    isStudent: true
    };
    const keys = Object.keys(myObject);
    
    
    for(const key of keys){
        console.log(key, " : ", myObject[key], '|' ,'Type :', typeof myObject[key]);

    }