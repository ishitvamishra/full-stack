class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //static prohibits the method from being called on instances of the class, and can only be called on the
    //class itself. It is used to define utility functions that are not related to any specific instance of the class.
    static createId(){
        return `123`
    }
}

const Ishitva = new User("Ishitva")
// console.log(Ishitva.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());