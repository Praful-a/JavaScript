/*************************
* Arrays
*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// Initialize new array
console.log(names[2]);
console.log(names.length);

//Muted array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
