function hi(userName) {
    console.log(`Hi, ${userName}`);
}

hi('Boomer');

// the parameter(s) that the unction is accepting or holding
// using string interpolation, we can refer to the parameter given to the function

function weather(day, temperature) {
    console.log(`Hello. Today is ${day}. The current temperature is ${temperature}.`);
}

weather('Monday', 75);

// write a function that takes first name and last name parameters and spits out "Hello, my name is first name last name"

function hello(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}.`);
};

hello('Faith', 'Fetzer');
hello('Ian', 'McGuigan');

// have them come together in a variable inside thw function

function hello(firstName, lastName) {
    let myName= firstName + ' ' + lastName
    console.log(`Hello, my name is ${myName}.`);
};

hello('Faith', 'Fetzer');
hello('Ian', 'McGuigan');
