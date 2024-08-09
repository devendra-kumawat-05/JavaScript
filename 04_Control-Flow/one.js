// < , > <= , >= , == , === , !==

// **** IF statement ****

// const isUser = true;
// const temp = 51;

// if(temp < 50){
//     console.log("Less than 50");
// }
// else{
//     console.log("temperature greater than 50");
// }


// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


// const balance = 1000;
// if(balance > 500) console.log("balance check");


// if (balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("balance = 1000");
// }


const userLoggedIn = true;
const debitCard = true;
const fromGoogle = false;
const fromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if(fromGoogle || fromEmail){
    console.log("User Log in");
}