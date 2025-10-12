# 🌟 JavaScript Complete Notes (Beginner to Advanced)

> A complete, easy-to-understand guide to learn JavaScript step by step — from basics to advanced concepts.

---

## 🧠 Introduction to JavaScript

JavaScript (JS) is a **scripting language** used to make web pages interactive.  
It runs in the **browser** and can also run on the **server** (Node.js).

### 💡 Features
- Lightweight and interpreted language  
- Object-oriented  
- Event-driven  
- Supports asynchronous programming  
- Runs on multiple platforms

### 📜 How to Include JavaScript
```html
<!-- Internal JS -->
<script>
  console.log("Hello JavaScript!");
</script>

<!-- External JS -->
<script src="script.js"></script>
```

### 🧩 JavaScript Basics
#### 🪙 Variables

Variables store data values.

```
var name = "Fariha";   // function-scoped
let age = 21;          // block-scoped
const country = "Pakistan";  // constant
```

 Use let and const instead of var (modern practice)

#### 🧮 Data Types
Type	Example
String	"Hello"
Number	42
Boolean	true, false
Undefined	let x;
Null	let y = null;
Object	{name: "Fariha", age: 21}
Array	[1, 2, 3]

#### ⚙️ Operators
##### Arithmetic Operators

+, -, *, /, %, **

##### Comparison Operators

==, ===, !=, !==, >, <, >=, <=

##### Logical Operators

&& (AND), || (OR), ! (NOT)

##### Assignment Operators

=, +=, -=, *=, /=

Example:
```
let a = 10;
let b = 5;
console.log(a + b);  // 15
```

#### 🔁 Control Flow
##### 🧾 Conditional Statements
```
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

#### 🌈 Switch Statement
```
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  default:
    console.log("Another day");
}
```
#### 🔄 Loops
##### For Loop
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

##### While Loop
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

##### For...of
```
const arr = [10, 20, 30];
for (let num of arr) console.log(num);
```

##### For...in
```
const person = {name: "Fariha", age: 21};
for (let key in person) console.log(key, person[key]);
```
#### 🧮 Functions
##### Function Declaration
```
function greet(name) {
  return "Hello, " + name;
}
```

##### Function Expression
```
const add = function(a, b) {
  return a + b;
};
```

##### Arrow Function (ES6)
```
const multiply = (a, b) => a * b;
```

#### 📦 Arrays
##### Creating Arrays
```
let fruits = ["Apple", "Mango", "Banana"];
```

##### Common Methods
Method	Description
push()	Add item to end
pop()	Remove last item
shift()	Remove first item
unshift()	Add item at start
slice()	Copy elements
splice()	Add/remove elements
map()	Create new array
filter()	Filter elements
forEach()	Loop through elements
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

#### 🧱 Objects
```
const user = {
  name: "Fariha",
  age: 21,
  greet: function() {
    console.log("Hello!");
  }
};
```

##### Accessing
```
console.log(user.name);
user.greet();
```

#### 🧭 ES6+ Features
##### 1️⃣ Template Literals
```
const name = "Fariha";
console.log(`Welcome ${name}!`);
```

##### 2️⃣ Destructuring
```
const person = {name: "Fariha", age: 21};
const {name, age} = person;
```

##### 3️⃣ Spread & Rest
```
const nums = [1, 2, 3];
const more = [...nums, 4, 5];
```

##### 4️⃣ Default Parameters
```
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
```

##### 5️⃣ Modules
```
// export.js
export const add = (a, b) => a + b;

// import.js
import { add } from './export.js';
```

#### ⏳ Asynchronous JavaScript
##### ⏱️ Callbacks
```
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}

fetchData(data => console.log(data));
```

##### 💥 Promises
```
let promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Done") : reject("Error");
});

promise.then(console.log).catch(console.error);
``` 

##### ⚡ Async / Await
```
async function getData() {
  let data = await fetch("https://api.example.com");
  console.log(data);
}
```

#### 🌐 DOM Manipulation
##### Select Elements
document.getElementById("title");
document.querySelector(".className");

##### Modify Elements
document.querySelector("#title").textContent = "Updated Title";
document.querySelector("p").style.color = "blue";

##### Create & Append
```
const div = document.createElement("div");
div.textContent = "Hello!";
document.body.appendChild(div);
```

#### 🎯 Event Handling
```
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

* Common events: click, mouseover, keyup, submit, change

#### 🧰 Object-Oriented JavaScript (OOP)
##### Classes
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}

const user1 = new Person("Fariha", 21);
user1.greet();
```

##### Inheritance
```
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
}
```

##### ⚙️ Error Handling
```
try {
  let result = riskyFunction();
} catch (error) {
  console.error("Something went wrong:", error);
} finally {
  console.log("Execution completed");
}
```

#### 🧮 JSON (JavaScript Object Notation)
```
const user = {name: "Fariha", age: 21};

const jsonStr = JSON.stringify(user); // Convert to JSON
const obj = JSON.parse(jsonStr); // Convert back to object
```

#### 🌍 Fetch API
```
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

#### 🧩 Local Storage
```
localStorage.setItem("name", "Fariha");
let name = localStorage.getItem("name");
localStorage.removeItem("name");
```

#### ⚡ Useful Topics
##### 🔹 Hoisting

Variables and functions are moved to the top of their scope before code execution.

##### 🔹 Closures

A function that remembers its outer variables.
```
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
```

##### 🔹 Higher-Order Functions

Functions that take other functions as arguments or return them.

###### 🧪 JavaScript Interview Quick Review

What is the difference between == and ===?
→ === checks both value and type.

What is a callback function?
→ A function passed as an argument to another function.

What are Promises?
→ Objects representing eventual completion of async operations.

What is the event loop?
→ Mechanism that handles asynchronous operations in JS.

##### 🎉 Conclusion

You’ve learned JavaScript from basics to advanced — including variables, loops, arrays, objects, ES6+ features, async programming, and OOP.

🚀 Practice daily. Try building small projects like:

Calculator

To-Do App

Weather App

Quiz Game

🧾 Author

Fariha Faraz
Frontend Developer | Passionate Learner | Future Full-Stack Developer
