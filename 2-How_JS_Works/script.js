/*************************
* Lecture: Hoisting
*/

// functions
calculateAge(1968);

function calculateAge(year) {
  console.log(2016 - year);
}

// retirement(1990);

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

retirement(1990);

// variables

console.log(age);
var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
