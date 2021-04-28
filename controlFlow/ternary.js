// shortcut for writing if else statements
let num = 6;

if (num > 0) {
    console.log('Yes');
} else {
    console.log('No');
};

num > 7 ? console.log('Yes it is') : console.log('It is not');

num = 7;

num > 7 ? console.log('More than 7') : num <= 6 ? console.log('It is 6 or less!') : num == 7 ? console.log('7!!!!') : console.log('What is it????');

num = 'hello';
num > 7 ? console.log('More than 7') : 
num <= 6 ? console.log('It is 6 or less!') : 
num == 7 ? console.log('7!!!!') : 
console.log(`${num} is NaN`); // this is equal to (num + 'is NaN')