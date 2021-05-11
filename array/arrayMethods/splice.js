// the splice changes the contents of the array by removing or replacing elements and/or adding new elements in its place
const months = ['January', 'March', 'April', 'June'];
//             1  2   3
months.splice(1, 0, 'February');
console.log(months);
// 1 index that will be affects
// 2 number of things to remove- if number is zero, doesnt take anythign away, just adds in
// 3 what to add in that index
months.splice(4, 1, 'May', 'newJune', 'July', 'August');
console.log(months);
// cann add multiple elements as well

// can just replace inside
months.splice(4, 1, 'new May');
console.log(months);

months.splice(4, 2, 'May', 'June');
console.log(months);