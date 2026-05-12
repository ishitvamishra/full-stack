//an object having properties and methods is called an object literal.
const user = {
    username: "ishitva",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        //this is used with username to tell which username we are referring to, because there can be multiple username variables in the code, and we want to refer to the one that is inside the user object.
        console.log(`Username: ${this.username}`);
        //here this is used to give the current context of the object, which is user in this case.
        console.log(this);
    }

}



console.log(user.username) //return ishitva 
console.log(user.getUserDetails());
 //returns Got user details from database
 //Username: ishitva
 //{username: 'ishitva', loginCount: 8, signedIn: true, getUserDetails: [Function: getUserDetails]}
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this // can be omitted as it is implicitly returned when we use the new keyword to create an instance of the User constructor function.
}

//if new is not used userTwo overrides the values of user and userOne and userTwo will have the same values, 
//but when we use new keyword, it creates a new instance of the User constructor function and assigns it to userOne and userTwo, so they will have different values.
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
//constructor here refers to the function that was used to create the instance of the object, which is User in this case. So when we log userOne.constructor, it will return the User function.

console.log(userOne.constructor);
console.log(userTwo);
console.log(userOne.greeting());