const MCUHeros = ["Thor","Ironman","Spiderman"];
const DCHeros = ["Superman","Flash","Batman"];

// MCUHeros.push(DCHeros);

// console.log(MCUHeros);
// console.log(MCUHeros[3][1]);

// const allHero = MCUHeros.concat(DCHeros);
// console.log(allHero);


const newAllHero = [...MCUHeros,...DCHeros];
// console.log(newAllHero);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const newAnotherArr = anotherArr.flat(Infinity);
// console.log(newAnotherArr);

console.log(Array.isArray("Devendra"));
console.log(Array.from("Devendra"));
console.log(Array.from({name : "Devendra"})); //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));