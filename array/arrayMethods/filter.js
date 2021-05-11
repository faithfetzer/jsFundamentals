// allows us to go through an array and return parameters that meet (or dont) specific condition


const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const filterPrice = foods.filter((foods) =>{
      return foods.price <= 100;
  });
  console.log(filterPrice);

  const filterNames = foods.filter((foods) =>{
      return foods.name.startsWith('b');
  });

  console.log(filterNames);