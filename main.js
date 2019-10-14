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

//Object literals
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

// For loop
for (let i = 0; i < 10; i++) {
  console.log(`For loop current i: ${i}`);
}

//While loop
let i = 0;
while (i < 10) {
  console.log(`While loop number: ${i}`);
  i++;
}

//Loop thorough an array

//manual for loop
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//for loop with assigned variable for entries
for (let todo of todos) {
  console.log(todo.text);
}

//high order array functions
//for each
todos.forEach(function(todo) {
  console.log(todo.text);
});

//map function
const todoText = todos.map(function(todos) {
  return todos.text;
});

console.log(todoText);

//filter
const todoId = todos.filter(function(todos) {
  return todos.id;
});

console.log(todoId);

//conditional statements
const a = "10";
//double equal does not check data type as well
//triple equal will check the data type and would not log to the console
if (a == 10) {
  console.log("x is 10");
} else if (a > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

//switch case
const color = "black";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not blue or red");
    break;
}

//functions
//can declare default values for parameters
function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums());

//arrow functions

const subtractNums = (num1 = 1, num2 = 0) => {
  return num1 - num2;
};

console.log(subtractNums(3, 1));

//Object Oriented programming in JavaScipt
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;

  this.sayHello;
  this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

//prototyping
Person.prototype.sayHello = function() {
  return `${this.firstName} says hello!`;
};
const Bob = new Person("Bob", "Bobsob", 1991);
console.log(Bob);

console.log(Bob.sayHello());
console.log(Bob.getFullName());

//creating classes
//easier to read syntax; added in ES6
class personExample {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }

  sayHi() {
    return `${this.firstName} says hello!`;
  }
}

//DOM Manipulation

console.log(window);

//Single element selectors
console.log(document.querySelector(".container"));
//const form = document.getElementById("my-form");

//Multiple element selectors
//console.log(document.querySelectorAll(".item"));
//const items = document.querySelectorAll(".item");

//items.forEach(item => console.log(item));

const ul = document.querySelector(".items");
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = "Hello";
//ul.children[1].innerText = "Daniel";
//ul.lastElementChild.innerHTML = "<h1>Test</h1>";

const btn = document.querySelector(".btn");
//btn.style.background = "red";

//Events
/*
btn.addEventListener("click", e => {
  e.preventDefault();
  console.log(e);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hi</h1>";
});
*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
//console.log(msg);
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value == "") {
    //alert("Please enter the fields");
    msg.classList.add("error");
    msg.innerHTML = "Please enter fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
