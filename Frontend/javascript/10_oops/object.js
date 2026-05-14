function multipleBy5(num){

    return num*5
}

// functions are also objects in JavaScript, so we can add properties to them and they will be accessible like any other property of an object.
multipleBy5.power = 2

console.log(multipleBy5(5));  // returns 25
console.log(multipleBy5.power);  // returns 2, because we added the power property to the multipleBy5 function and assigned it a value of 2, so when we log multipleBy5.power, it returns 2.
console.log(multipleBy5.prototype); // returns an empty object, because every function in JavaScript has a prototype property
// that is used to build the __proto__ chain for objects created using that function as a constructor. The prototype property 
//is an object that contains properties and methods that will be inherited by all instances created using that constructor function.
//In this case, since we haven't added any properties or methods to the prototype of the multipleBy5 function, it returns an empty object.
//Since we added the power property to the function, it is accessible as a property of the function.


//
function createUser(username, score){
    this.username = username
    this.score = score
}

//increment and printMe are methods that we want to be available to all instances of createUser, so we add them to the prototype of 
//createUser, which is an object that is shared among all instances created using the createUser constructor function. This way, all
//instances of createUser will have access to these methods through the prototype chain.
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

//when we create an instance of createUser using the new keyword, it creates a new object and sets its __proto__ property to point to the 
//prototype of createUser, which is where the increment and printMe methods are defined. This allows us to call these methods on the instance,
//and they will be able to access the properties of the instance through the this keyword. if we dont use new keyword, then the this keyword 
//will refer to the global object (window in browsers) and it will not work as expected, because we want this to refer to the instance of createUser 
//that we are creating.
const chai = new createUser("chai", 25)  //returns the object {username: "chai", score: 25} and sets the __proto__ property 
// of this object to point to createUser.prototype, which is where the increment and printMe methods are defined. 
// This allows us to call these methods on the chai instance, and they will be able to access the properties of the instance through the this keyword.
const tea = createUser("tea", 250)  //here tea and 250 will not be assigned to username and score properties of the tea object.

chai.printMe()

//Object sits at the top of the prototype chain, which means that all objects in JavaScript inherit from Object.prototype.
//This is why we can add properties and methods to Object.prototype and they will be available to all objects in JavaScript,
//including arrays, functions, and even other objects. This is a powerful feature of JavaScript's prototypal inheritance system, 
// as it allows us to extend the functionality of all objects in a consistent way.


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/