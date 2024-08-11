// for-each loop

const code = ["js", "ruby", "java", "python", "cpp"];

// code.forEach( function (item){
//     console.log(item);
// })


// code.forEach((item) => {
//     console.log(item);
// });



// function printMe(item){
//     console.log(item);
// }

// code.forEach(printMe);



// code.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        langName : "javascript",
        langFileName : "js"
    },
    {
        langName : "Ruby",
        langFileName : "ru"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.langName);
})