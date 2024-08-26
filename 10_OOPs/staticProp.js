class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const devendra = new User("Devendra");
// console.log(devendra.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("iPhone", "iphone@apple.com");
iPhone.logMe();
// console.log(iPhone.createId());