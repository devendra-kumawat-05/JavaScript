const name = "Devendra";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('DevendraKumar');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('K'));

// const newStr = gameName.substring(0, 4);
// console.log(newStr);

// const anStr = gameName.slice(-8, 9);
// console.log(anStr);

// const strOne = "   Dev   ";
// console.log(strOne);
// console.log(strOne.trim());

const url = "https://devendra.com/devendra%20personal";
console.log(url.replace('%20', '--'));
console.log(url.includes('devendra'));


const altStr = "devndra-kumar-kumawat";
console.log(altStr.split('-'));