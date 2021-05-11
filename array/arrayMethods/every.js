// checks the array for a condition and then returns true or false like the some method, except it checks every item sin the array to see if it meets that condidiont
const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const isExpensive = foods.every((food) => {
      return food.price <= 1000
  })

  console.log(isExpensive); //true

  const isCheap = foods.every((food) => {
    return food.price <= 30
})

console.log(isCheap); //false