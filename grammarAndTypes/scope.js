let x = 12;

console.log(x);
function scope() {
    let x =33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

console.log(y);

function scope2() {
    console.log(y);
}

scope2();
console.log(y);

let z = 12;

console.log(z);

function scope3() {
    z = 45;
    console.log(z);
}

scope3();
console.log(z);