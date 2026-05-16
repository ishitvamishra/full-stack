class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai); // returns false because they are two different objects in memory
console.log(chai instanceof User); // returns true because chai is an instance of User class, and Teacher class inherits from User class, so chai can access all the properties and methods of User class through the prototype chain.
console.log(chai instanceof Teacher); // returns true because chai is an instance of Teacher class, and Teacher class inherits from User class, so chai can access all the properties and methods of Teacher class through the prototype chain.