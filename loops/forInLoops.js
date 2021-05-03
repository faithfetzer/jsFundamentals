// grat for iterating over values in an objects
// properties in objects are whats call enumerable ('countable')

let student = {
    name: 'Jake from state farm',
    awesome: true,
    degree: 'insurance',
    age: 98
};

for (potato in student){ //potato can be "item"/object/ WHATEVER YOU WANT but doesnt need to be anything specific
    // console.log(potato);
    console.log(student[potato]);
}