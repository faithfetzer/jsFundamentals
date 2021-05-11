//  convert elements of array to a string
// can accept an object parameter, "Separator" which indicates how they are attached
// defaults to a comma if separator not specified

const greetings= ['hi', 'hello', 'welcome', 'howdy'];
console.log(greetings.join());
console.log(greetings.join(''));
console.log(greetings.join('! '));