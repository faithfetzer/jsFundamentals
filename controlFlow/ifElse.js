let weather =  75;

if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
 let myName =  'Faith';

//  bronze
 if (myName == 'Faith') {
     console.log(myName);
 } else {
     console.log('Hello, what is your name?');
 }

//  silver
if (myName == 'Faith') {
    console.log('Hello, my name is ' + myName);
} else {
    console.log('Hello, what is your name?');
}

// gold
myName =  'John';
if (myName == 'Faith') {
    console.log('Hello, my name is ' + myName);
} else {
    console.log('Hello, is your name ' +  myName + '?');
}

// fun
// var newName = prompt('Hello, what is your name?');

// if (newName == myName) {
//     alert('Wow! That is my name too!');
// } else if (newName == false) {
//     alert('It\'s ok if you don\'t want to tell me. It is nice to meet you!');
// } else {
//     alert('It is so nice to meet you' + newName + '!');
// };

let nextName ='eric';

if (nextName == 'Waldo') {
    console.log('Hello ' + nextName + ', welcome back!');
} else if (nextName === 'Eric') {
    console.log('Hello ' + nextName);
} else {
    console.log('I don\'t know ' + nextName);
}

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
let age = 16;

if (age <= 17) {
    console.log('Sorry, you\'re too young to do anything.');
} else if (age >25) {
    console.log('You can rent a car!');
} else if (age > 21){
    console.log('You can drink!');
} else (
    console.log('You can vote!')
);