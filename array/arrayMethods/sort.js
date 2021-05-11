// sort method sorts items in an array, sort order can be either alphabetic or numeric, either ascending or descending
// by default, orders the values as strings in alphabteical, scending order
// can take in a compare function which indicates ascending/descedning order
const shoppingList =['bell peppers', 'apples', 'coffee', 'tomatoes', 'celery'];
console.log(shoppingList.sort());
console.log(shoppingList.sort((a,b)=> b-a)); //how to sort reverse alphabetical? not covered- look it up

const costs = [4, 7, 1, 8,3 ,72, 379];
console.log(costs.sort((a,b)=> b-a));

const numbersAndShopping = ['bell peppers', 'apples', 'coffee', 'tomatoes', 'celery', 4, 7, 1, 8,3 ,72, 379]
console.log(numbersAndShopping.sort((a,b)=> b-a));
console.log(numbersAndShopping.sort((a,b)=> a-b));
console.log(numbersAndShopping.sort());