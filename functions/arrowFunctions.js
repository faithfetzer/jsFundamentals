// 1         2
let hi = () => {
    console.log('hi');
};
// "fat arrow functions"
// 1 we need to set the fat arrow function to a variable
// 2 use "fat arrow" to signify it is a function
// intriduced in es6
// more concise way to write functions *not declarations
// do not get hoisted
// 2 types: concise body and block body
// concise body

let hiTwo = () =>console.log('hi');

// concise body arrow unctions return by default

let apples = x => console.log(`there are ${x} apples.`);
apples(45);

let applesOranges = (x,y) => console.log(`there are ${x} apples and ${y} oranges`);
applesOranges( 45, 89);

// need () if there are no parameters or multiples