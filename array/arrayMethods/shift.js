// removes the first element of the array and returns it
// changes length of array
const array = [10, 'student', 'cake', -78, 'zebra'];
console.log('before:', array);
const firstItem = array.shift();
console.log('after:', array);
console.log('shifted item:', firstItem);