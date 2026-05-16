function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username) //this line will call setUsername fuction but would show no assignment of username to object because the this keyword
    // inside the SetUsername function will refer to the global object (window in browsers) and not to the instance of createUser that we are creating.
    SetUsername.call(this, username) //whilst this line will call setUsername function and assign the username to the
    // object because we are using call method to explicitly set the this keyword to refer to the instance of createUser that we are creating.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);