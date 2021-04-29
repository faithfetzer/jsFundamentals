// var vs let
/* introduced in es6, we hav 3 keywords for variables
 var & let operate the same bu behave differently
    var scoped to nearest funcrion block
    let is scoped to neares enclosing block */

var x = 12;

function varTest() {
    var x = 33;
    if( 1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
};

varTest();
console.log(x);

let y = 12;

function varTestTwo() {
    let y = 33;
    if( 1 == 1) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
};

varTestTwo();
console.log(y);
function constTest() {
    const scope =1;
    console.log(scope);
    if(true) {
        const scope =3;
        console.log(scope);
    }
    console.log(scope);
}

constTest();