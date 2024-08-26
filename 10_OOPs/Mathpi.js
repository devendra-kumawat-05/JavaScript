// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const myObject = {
    name: "Devendra",
    salary: 250000,
    isAvailable: true,

    Hire: function(){
        console.log("Not available");
    }
}

// console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "name"));

Object.defineProperty(myObject, "name", {
    // writable: false,
    enumerable: false,
    // configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(myObject, "name"));


for (let [key, value] of Object.entries(myObject)) {
    if(typeof value !== 'function' ){
        console.log(`${key} : ${value}`);
    }
}