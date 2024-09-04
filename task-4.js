/**
 * Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
 */
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const proNumber = Object.keys(student);
const x = proNumber.length;
console.log(x);