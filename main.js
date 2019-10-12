//Single line comment
/*
Multi line comment
*/

//var, let, const
//var is globally scoped

//let allows us to reassign variables
//const cannot

//Data Types
//Stirng, Numbers, Boolean, null, undefined

const name = "John";
const age = 23;
const rating = 4.5;
const isNew = false;
const x = null;
const y = undefined;
let z;

console.log(typeof x);

//Template Strings
console.log(`My name is ${name}`);

//String properties and methods
const s = "Hello world";
console.log(s);
console.log(s.length);
console.log(s.substring(0, 5));
console.log(s.split(""));

//Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
console.log(numbers[0]);

numbers[0] = 10;
console.log(numbers[10]);
numbers.push(11);
console.log(numbers);

numbers.pop();
console.log(numbers);

console.log(Array.isArray(numbers));

console.log(numbers.indexOf(5));

//Objects
const person = {
  firstName: "Bob",
  lastname: "Bobson",
  age: 30,
  address: {
    street: "13022 Lylat hill",
    state: "Colorado"
  },
  hobbies: ["movies", "sports"]
};

const robot = {
  name: "Optimus",
  faction: "Autobot"
};

console.log(person);
console.log(person.firstName);
console.log(person.address);
console.log(person.address.state);
console.log(person.hobbies[1]);

const todos = [
  {
    id: 1,
    text: "laundry"
  },
  {
    id: 2,
    text: "homework"
  }
];

console.log(todos[1].text);

//convert to JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
