// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // NAMED IIFE 
    console.log(`DB CONNECTED`);
})();

// syntax -> ()();


( () => {
    console.log(`db connected`);
})();

( (name) => {
    console.log(`db connected ${name}`);
})("Devendra");