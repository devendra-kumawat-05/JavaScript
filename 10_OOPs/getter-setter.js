class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(val){
        this._password = val;
    }
}

const hitesh = new User("dev@gmail.com", "12abc34");
// console.log(hitesh.password);
console.log(hitesh.email);