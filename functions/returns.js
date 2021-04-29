
let hi= () => {
//  1
    return 'hi';
};
//   2        3
let newName = hi();

console.log(newName);

// 1 keyword that brings data out of function
// 2 we eed a new variale to hold the value of the return
// 3 when called the funtion becomes the value of the return

let z = 22;
let a = 446564;

let math = (numOne, numTwo) => {
    let total = numOne + numTwo;
    return total;
}

let sum = math(1 , 2);
let sum2 = math(4651456, 6186);
let sum3 = math(a,z);

console.log(sum, sum2, sum3);

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/
let tipCalc = (total,tipPercent) => {
    let tipAmount = total*(tipPercent/100);
    let billTotal = total + tipAmount;
    console.log(billTotal);
    return tipAmount;
}

let firstTip = tipCalc(10, 20);
let secondTip = tipCalc(100, 1);
let thirdTip = tipCalc(10, 100);

console.log(firstTip, secondTip, thirdTip);

// then he said we want it to give the BILL TOTAl, not the tip amount (not really a tip caluclator because if it spits out the total, you would still ned to do some math.... *but whatever*)

let totalCalc = (bill,tipPercent) => {
    let tipAmount = bill*(tipPercent/100);
    let billTotal = bill + tipAmount;
    return billTotal;
}

let firstTotal = totalCalc(10, 20);
let secondTotal = totalCalc(100, 1);
let thirdTotal = totalCalc(10, 100);
console.log(firstTotal, secondTotal, thirdTotal);