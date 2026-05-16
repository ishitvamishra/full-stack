const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//this descripter object contains information about the property "PI" of the Math object, such as its value,
// whether it is writable, enumerable, and configurable and all are false, which means that the value of 
// Math.PI cannot be changed, it cannot be deleted, and it will not show up in a for...in loop or Object.keys() method.
//crux of the matter is if some property is prohibited property of object check it using getOwnPropertyDescriptor method
//and then try to change it, you will see that it will not change because it is a non-writable property of the Math object.

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true, //enumerable: false will make the name property non-enumerable, which means it will not 
    // show up in a for...in loop or Object.keys() method, but it will still be accessible and modifiable.
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    //check for omitting functions from the object while iterating
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}