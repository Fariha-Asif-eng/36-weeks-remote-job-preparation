"use strict"; // treat all JS code as newer version

// alert(3 + 3) is c error aye ga bcz abi hm bt kr rhe hen sb kuch node k andr agr a;lert run krna hy to wo browser k console me hojaye ga ya phr html ko bind kr k phr b hojaye ga...
// console me jo kuch b hota hy wo document me hota hy yani k javascript ka engine browser me chupa hota hy...
// node me alert ka use krne ka syntax different hota hy

console.log(3 +
    3
)  // code readability should be high

let name = "Fariha" //string
let age = 25   // number
let isLoggedIn = true // boolean

// number ki range hoti hy 2 to power 53 tak hoti hy iske baad ki value bigInt me jati hy

// how many data types we have:
//..... primitive data types.....
// number => 2 to power 53
// string => ""
// bigInt 
// boolean => true/ false
// null => standalone value => representation of empty value
// undefined => variable declared but not defined => value abi assign nahi hui
// symbol => uniqueness define krne k liye use hota hy
console.log(typeof null) // object
console.log(typeof undefined) // undefined

// ..... non-primitive data types....
// object
// array