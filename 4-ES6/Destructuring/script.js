///////////////////////////////
// Lecture: Destructuring

// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES6
const [n, a] = ['John', 26];
console.log(n);
console.log(a);

const obj = {
  firstName: 'john',
  lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: x, lastName: y} = obj;
console.log(x);
console.log(y);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
