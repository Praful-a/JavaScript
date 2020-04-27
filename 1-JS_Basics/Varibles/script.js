/*************************
Multi line comments.
* Variable and data types.
*/

// console.log('Hello World!!!');
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Teacher';
console.log(job);

// You can not define numbers as a variable in js
// var 3years = 3; like this
var _3years = 4; //this is the right syntax
// or you can not define any symbol in js
// var john/Mark = 'John and Mark' like this
// you have to type.
johnMark = 'John and Mark';
// or you can not use JavaScript reserved words as a variables.
// var if = 23; or var function = 22; like this.

// Single line comment in js.


/****************************
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

var lastName = prompt('What is his last Name');
console.log(firstName + '' + lastName);
