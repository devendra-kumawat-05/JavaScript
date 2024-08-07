function sayName(){
    console.log("D");
    console.log("e");
    console.log("v");
    console.log("e");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("a");
}

// sayName();

// function sum(num1, num2){
//     console.log(num1 + num2);
// }

function sum(num1, num2){
    // let s = num1 + num2;
    // return s;
    return num1 + num2;
}

const res = sum(3,4);
// console.log("Result : ", res);


function loginUser(username /* = "User" */){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUser("Dev"));
// console.log(loginUser());

function cartPrice(...num1) {
    return num1;    
}

// console.log(cartPrice(200, 400, 500));

const user = {
    username : "Devendra",
    price : 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObject(user);
handleObject({
    username : "Dev",
    price : 399
});


const newArray = [200, 300, 400, 500];

function secondValue(getArray){
    return getArray[1];
}
// console.log(secondValue(newArray));
console.log(secondValue([200, 300, 400, 500]));