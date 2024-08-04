// Primitive :
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let str = "Devendra";
let value = 34;
let score = 34.65;
let isLoggedIn = false;
let num;
let temp = null;
let id = Symbol('1234');
const anotherId = Symbol('1234');
// console.log(id === anotherId);
let bigNumber = 232342354252452n;



// Reference (Non Primitive):
// Array, Objects, Functions

const arrHeros = ["shaktimaan", "naaraj", "doga"];
const myObj = {
    name : "Devendra",
    age : 21,
}

const myFunction = function(){
    console.log("Hello India");
}


console.log(typeof bigNumber);
console.log(typeof temp);
console.log(typeof myFunction);


// ********************************************

// Stack => Primitive
// Heap => Non-Primitive 

let myName = "devendrakumawatt";

let anotherName = myName;
anotherName = "kumawatDevendra";

console.log(myName);
console.log(anotherName);

let user1 = {
    email : "devndrakumar@gmail.com",
    age : 21
}

let user2 = user1;
user1.email = "dev@gmail.com";

console.log(user1.email);
console.log(user2.email);
