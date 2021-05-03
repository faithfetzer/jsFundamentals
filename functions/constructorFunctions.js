// options 1

let person1 = {
    firstName: 'Macy',
    age: 24,
    canVote: true
};

let person2 = {
    firstName: 'Jeremy',
    age: 15,
    canVote: false
};
let person3 = {
    firstName: 'Tyler',
    age: 38,
    canVote: true
};

// option 2-- constructor function!!!
// 1        2       3
function Person(n, a, cV) {
//  4       5           5 
    this.firstName = n;
    this.age = a;
    this.canVote = cV;
}

// 1 function keyword
// 2 function name- name hould eb capitalized
// 3 parameters
// 4 "this" keyword gives us th eability ti refer bacj ti whatever called or activaed it in this case, 'this' is 'pPerson'
// 5 key of new object NOT referring to parameter
// 6 parameter passed into constructor function

console.log(typeof Person);

//                  7   8
let faithFetzer = new Person('Faith', 35, true);
console.log(faithFetzer);

// 7 & 8 'new' keyword is calling Person function, creating a rson wuth values passed in as assignments and storing that person as a variable

// console.log(person1.age);
// person1.age = 45;
// console.log(person1.age);