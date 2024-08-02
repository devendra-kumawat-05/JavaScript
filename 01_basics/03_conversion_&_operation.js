let score = "33abc";
let val = null;
let a = undefined;
let x = true;

console.log(typeof score);
let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);
console.log("-----------------------");


console.log(typeof val);
let valInNumber = Number(val);
console.log(typeof valInNumber);
console.log(valInNumber);
console.log("-----------------------");

console.log(typeof a);
let aInNumber = Number(a);
console.log(typeof aInNumber);
console.log(aInNumber);
console.log("-----------------------");


console.log(typeof x);
let xInNumber = Number(x);
console.log(typeof xInNumber);
console.log(xInNumber);

console.log("------------------------");

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

console.log("-----------------------");

// 1 => true; 0 => false
// "" > false
// "devendra" => true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


