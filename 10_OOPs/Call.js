function setUsername(username){
    // complex calculations
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password){
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const dev = new createUser("Devendra", "dev@google.com", "123");
console.log(dev);