// there are two types of data types:
// 1. primitive     2. non-primitive
// yeh 2no data type sirf is trh se categories hue hen k ap kis tarah se memory me store krte hen or inko kis tarah c call krte hen

// kis trh c memory me data ko rkha jata hy or access kia jata hy is c 2 trh c categories kia gya hy primitive and non-primitive
// non primitve ko reference data type b bola jata hy
// primitve k jitne b data type hote hen wo memory me call by values k name c store hote hen like agr hm usko dubara call krte hen to original ko nahi chera jata blke unki values ko copy kr k bheja jata hy 
// primitive: string, number, boolean, null(empty), undefined (variable declare hogya mgr value abi decide nahi hui), symbol(kisi b value ko unique bnane k liye symbol ka use hota hy), BigInt(zarurat c ziada bar values)

const score = 64;
const scoreValue = 100.3;

const isLoggedIn = true;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
// Although dono symbol me value same hy mgr phr b jo value return ho rahi backen pe wo same nahi hyisliye symbol ka mtlb hy unique value assign krna

const bigNumber = 56823523412n;

// Refrence data type (non primitive):
//Arrays, objects and functions

const heroes = ["superman", "batman", "spiderman"];

let myObj = {
    name: "Fariha",
    age: 27,
};

const myFunction = function () {
    console.log("hi world");
    
}


// javascript is a dynamically typed language. it means it has no restrictions for declaring the value.


console.log(typeof(bigNumber)); //bigint

// ham typeof k function se kisi b variable ka data type maloom kr skte hen k us variable me kon se type ka data store hy
