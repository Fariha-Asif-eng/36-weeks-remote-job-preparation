let score = "33"

console.log(typeof (score)); // yeh method k zariye b maloom hota hy
console.log(typeof score);  

let valueInNumber = Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);

let score1 = "33abc"
let conversion = Number(score1)
console.log(conversion);
console.log(typeof score1);
console.log(typeof conversion);

// javascript me yeh conversion hojati hy jb k yeh honi nahi chahiye isliye javascript type safety language nahi hy 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1;
// let isLoggedIn = "";
let isLoggedIn = "Fariha";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Fariha" => true

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);







