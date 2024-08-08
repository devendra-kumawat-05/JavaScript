const user = {
    username : "Devendra",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// username = "Dev";
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username = "devendra";
//     console.log(this.username);
// }

// chai();



// const chai = function (){
//     let username = "Devendra";
//     console.log(this.username);
// }



// const chai = () => {
//     let username = "Devendra";
//     console.log(this);
// }

// chai();


//  ***** Arrow Function ******

// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const sum = (num1, num2) => num1 + num2;

// const sum = (num1, num2) => (num1 + num2);

const sum = (num1, num2) => ({username : "Devendra"});

console.log(sum(5,7));

