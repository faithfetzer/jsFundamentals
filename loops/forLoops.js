// loops: quick and easy way to repeat something
// 3 parts:
// -initial expression
// -condition
// -increment expression

for (let i = 0; i <10; i++) {
    console.log(i);
}

// count 10 to 0 by 1

// count down from -24 from 0 by 2s

// go through a name and display each letter individally

let myName = 'Isaiah';

for(let i =0; i < myName.length; i++) {
    console.log(myName[i]);
}

// make a loop where you add all numbers 1 to 50

let sum = 0;

for (let i = 1 ; i <= 50 ; i++) {
    sum += i;
}

console.log(sum);