const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

//   indicated by ...
// expands the contents of an array and takjes it out of its array structure
console.log(...foods);

const months = ['January', 'March', 'April', 'June'];

console.log(...months);

let newArray = [...foods, ...months];
console.log(newArray);