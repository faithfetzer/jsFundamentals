const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

//   executes a function for each specified value in an array and returns a single value
// 2 paramaters- number at each iteration, then object we are iterating (can be named anything)
const totalCost = foods.reduce((currentTotal, stuff) =>{
    return item.price + currentTotal;
}, 0);
//0 is what we start at
console.log(totalCost);

