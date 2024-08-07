// var c = 300;
let a = 200;

if (true) {
    let a = 10;
    // console.log("Inner a : ",a);
    
    const b = 20;
    // var c = 30;
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Devendra";

    function two(){
        const website = "Laptop";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();


if(true){
    const username = "Devendra";
    if(username === "Devendra"){
        const website = "Laptop";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



//  *************** Interseting ***************

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

 
const addTwo = function (num) {
    return num + 2;
}

addTwo(5);