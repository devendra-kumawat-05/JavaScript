// let myName = "Devendra      ";

// console.log(myName.trueLength);



let myHero = ["Thor", "Spiderman"];

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.devendra = function(){
    console.log(`Devendra is present in all object`);
}

Array.prototype.heyDevendra = function(){
    console.log(`Devendra says Hello`);
}

// heroPower.devendra();
myHero.devendra();
myHero.heyDevendra();
// heroPower.heyDevendra();



            // Inheritance

const User = {
    name: "Dev",
    email: "dev@google.com",
}

const Teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'Javascript',
    fullTime: true,
    __proto__: teachingSupport,
}

Teacher.__proto__ = User;


// modern syntax

Object.setPrototypeOf(teachingSupport, Teacher);


let anotherUsername = "Devendra    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"Devendra".trueLength();
"Kumawat".trueLength();
 