// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const dev = new User("Devendra", "Devendra@google.com", "123345");
console.log(dev.encryptPassword());
console.log(dev.changeUsername());


        // Behind the scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`;
}

const kumar = new User("Kumawat", "Kumawat@google.com", "9898767");
console.log(kumar.encryptPassword());
console.log(kumar.changeUsername());
