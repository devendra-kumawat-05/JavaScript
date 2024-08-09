const userMail = "d@gmail.com";

// if(userMail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user mail");
// }


/* 
    FASELY values : ->  false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/*
    TRUTHY values : -> "0", 'false', " ", [], {}, function(){}
*/



// const userEmail = [];
// if (userEmail.length === 0) {
//     console.log("Empty array");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}



//   *** Nullish Coalescing operator (??) :-> null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);



//  **** Terniary Operator ****

// syntax ->  condition ? true : false;

const price = 100;
price >= 90 ? console.log("greater than 90") : console.log("less than 90");