const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newVal = myNums.map((num) => {
    return num + 10;
})

// console.log(newVal);



const newScore = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
                
console.log(newScore);