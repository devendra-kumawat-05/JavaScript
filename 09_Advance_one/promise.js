const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log(`Async task is complete`);
        resolve()
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Dev", email: "example@dev.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Devendra", pass: "12345"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", pass: "12345"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
});


async function consumePromiseFive(){
    try{
        const res = await promiseFive;
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUser(){
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data);
//     }catch(err){
//         console.log("E: ",err);
//     }
// }

// getAllUser();


fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})