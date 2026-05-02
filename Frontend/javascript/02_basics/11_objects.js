//when objects is declared as literal it does not become singleton
//whereas when it is declared as constructor it become singleton

//object literals

const mySym = Symbol("key1")

const user = {
    name: "Ishitva",
    "full name": "Ishitva Mishra",
    [mySym] : "mykey1",
    age: 21,
    location: "Akbarpur",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}  //this is object


console.log(user.name)
console.log(user["name"])
console.log(user["full name"])  // full name could be only accessed using this method
console.log(user[mySym])

user.location="Jalandhar"
//Object.freeze(user)  //due to using freeze any further changes will not be propagated
user.location="Shimla"
console.log(user)


//function in object 

user.greeting= function(){
    console.log("Hello User")
}

user.greetingTwo= function(){
    console.log(`Hello User, ${this.name}`)
}

console.log(user.greeting)   // this provides the refrence of function
console.log(user.greeting())

console.log(user.greetingTwo())

//Other ways of declaring an object

const tinderUser = new Object()  //this is a singleton object 
// const tinderUser = {} this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(Object.keys(tinderUser))  //creates an array of the keys of object
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))



const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Ishitva",
            lastName: "Mishra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)
