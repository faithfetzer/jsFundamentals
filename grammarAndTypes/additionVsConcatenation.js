let third = 1050 +'100';
console.log(third, typeof third);

console.log(1050 + 100);

let firstName = 'John';
let lastName = 'Abraham';
let houseNumber  = 7564;
let aptNumber = null;
let street = 'Algonquin Ave';
let city = 'Raleigh';
let state = 'NC';
let zipcode = 45621;
console.log(firstName + ' ' + lastName + ' ' + houseNumber + ' Apt ' + (aptNumber||'n/a') + ' ' + street + ' ' + city + ', ' + state + ' ' + zipcode)
console.log(firstName, lastName, houseNumber, aptNumber|| "", street, city, state, zipcode);