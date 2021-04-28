// falsy values
// 6 different values
// false
// 0
// empty strings (" ", ' ', ` `)
// null
// undefined
// Nan (not a number)

let isOn = true;
 
if (isOn == true) {
    console.log('the light is on!');
};

if (isOn) {
    console.log('the light is still on');
};

if (true) {
   console.log('ON');
}

isOn =  false;

if (isOn == false) {
    console.log('the light is off');
}