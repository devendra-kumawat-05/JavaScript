// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let currDate1 = new Date(2024, 07, 03);
// let currDate2 = new Date(2024, 07, 03 ,5,3);
let currDate3 = new Date("03-08-2024");

// console.log(currDate1.toDateString());
// console.log(currDate2.toLocaleString());
// console.log(currDate3.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(currDate3.getTime());

// console.log(Math.floor(Date.now()/1000));


let nowDate = new Date();
// console.log(nowDate);
// console.log(nowDate.getMonth());
// console.log(nowDate.getDate());
// console.log(nowDate.getFullYear());


nowDate.toLocaleString('default',{
    weekday: "long",
})