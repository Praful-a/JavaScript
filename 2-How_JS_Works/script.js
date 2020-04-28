/*************************
* Lecture: Hoisting
*/
/*
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
*/

/////////////////////////////
// Lecture: Scoping

// First Scoping example
/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  //console.log(c);
  console.log(a+d);
}
*/

////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1985);
//
// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this);
// }

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
      console.log(this);
      console.log(2016 - this.yearOfBirth);
      /*
      function innerfunction() {
        console.log(this);
      }
      innerfunction(); */
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
