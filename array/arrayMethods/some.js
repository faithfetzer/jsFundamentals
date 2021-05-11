const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const hasBeef = foods.some((food) => {
      return food.name === 'beef'
  })
  console.log(hasBeef);

  const hasChicken = foods.some((food) => {
    return food.name === 'chicken'
})
console.log(hasChicken);