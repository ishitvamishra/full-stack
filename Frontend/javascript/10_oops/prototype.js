// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//here we are trying to inject a new new method named hitesh into all objects in javascript, 
// by adding it to the Object.prototype it will pass down to arrays, finctions, strings and 
// all other objects in javascript, because all objects in javascript inherit from Object.prototype, which is the top of the prototype chain.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//here we are injecting a new method to arrays which will be available to only arrays and not to other objects or strings or functions
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh() // returns "hitesh is present in all objects"
// myHeros.hitesh()  // returns "hitesh is present in all objects"
// myHeros.heyHitesh() //returns "hitesh says hello"
// heroPower.heyHitesh()  // return an error because heyHitesh is onnly available to arrays and not to other objects


// inheritance

//creating different objects for inheritance demonstration
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //this line allows TASupport to inherit properties and methods from TeachingSupport, which in turn inherits from Teacher, 
    // which in turn inherits from User. This creates a prototype chain where TAsupport can access properties and methods defined 
    // in TeachingSupport, Teacher, and User through the __proto__ property.
    __proto__: TeachingSupport
}

//teacher will inherit all the properties of user
Teacher.__proto__ = User

// modern syntax
//teaching support will inherit all the properties of teacher, which in turn inherits from user
Object.setPrototypeOf(TeachingSupport, Teacher)


//Creating a new function for strings, userdefined
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()