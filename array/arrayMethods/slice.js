// will "cut" array at given indices
const array = [10, 'student', 'cake', -78, 'zebra'];
console.log(array.slice(0,2)); //[ 10, 'student' ]
console.log(array.slice(1,4)); //[ 'student', 'cake', -78 ]
console.log(array.slice(2,4)); //[ 'cake', -78 ]
console.log(array.slice(1,-1)); //[ 'student', 'cake', -78 ]

// if the second parameter is not specified, the method will target the rets of the specified index
console.log(array.slice(3)); //[ -78, 'zebra' ]

