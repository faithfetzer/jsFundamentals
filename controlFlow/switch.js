// often used with a break or a default keyword
// break: breaks out of the switch block
// default: specifies some code to run if there is no case match

let officeCharacter = 'Pam';

switch(officeCharacter) {
    case 'Michael' : 
        console.log('My mind is going a mie an hour');
        break;
    case 'Dwight' :
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
        console.log(officeCharacter);
}



/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'pie';

switch (dessert) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'Cake':
        console.log('Cake is great!');
        break;
    case 'Ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu.');
};