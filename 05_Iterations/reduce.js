const myValues = [1, 2, 3];

const myTotal = myValues.reduce((acc, currVal) => {
    // console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc + currVal; 
}, 0)

// console.log(myTotal);


const course = [
    {
        itemName: "js-course",
        price: 299
    },
    {
        itemName: "java-course",
        price: 499
    },
    {
        itemName: "py-course",
        price: 599
    },
    {
        itemName: "AI-course",
        price: 999
    },
    {
        itemName: "mobile-Dev-course",
        price: 1299
    }
];

let sum = course.reduce((acc, currVal) => {
    return acc + currVal.price;
}, 0)

console.log(sum);