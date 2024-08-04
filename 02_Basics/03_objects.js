// singleton - Object.create


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Devendra",
    "Fname": "Devendra Kumawat",
    [mySym]: "myKey1",
    age: 21,
    location: "Sikar",
    email: "dev@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Mon", "Wed"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Fname"]);
// console.log(jsUser[mySym]);


jsUser.email = "DK00@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "DK9922@gmail.com";

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
}

jsUser.greeting2 = function(){
    console.log(`Hello jsUser , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());