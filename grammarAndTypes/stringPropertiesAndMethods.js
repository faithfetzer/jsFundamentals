// string properties- length is only prop for strings
let myName = 'Faith';
let myFullName = 'FaithFetzer';
let myFullNameSpaced = 'Faith Fetzer';
console.log(myName.length, myFullName.length, myFullNameSpaced.length);

// .property method()
// string methods- functions associated with data types- manipulate data

console.log(myName.toUpperCase());

let home = 'Indiana';
console.log(home.includes('Indy'));

let sent = "This sentence will be split up, twice!";
console.log(sent.split('will'));
console.log(sent.split(' '));