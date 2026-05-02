/* 
                                        Datatypes
                         ___________________|___________________
                        |                                       |
                    Primitive                           Refrence(Non-Primitive)
In JavaScript, a primitive (primitive             Derived from the primitive datatype
value,primitive data type) is data that           Refrence of original value os given                                                                                                                                         |     
is not an object and has no methods or                   _______|_______
properties. Everytime any value of it is                 |      |      |
referred the copy of that varibale is                  Array    |   Functions
passed and made changes into                                 Objects
                        |                                    
    ____________________|_____________
    |     |    |    |    |      |    |
  String  |  bigint | undefined |   null
          |         |           |    
        number   boolean      symbol
*/


const score = 100        
const scoreValue= 100.3 // both are same

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const id2= Symbol('123')

console.log(id==id2);   //false

const bigNumber = 2535837439840992280239n

const heros=["Hulk", "Thor", "Ironman"]


let myobj={
    name: "Ishitva",  //this is object
    age: 22,
}


const myFunction= function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);


/*
typeof null === "object";
In the first implementation of JavaScript, JavaScript values were represented as a 
type tag and a value. The type tag for objects was 0. null was represented as the 
NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence 
the typeof return value "object". (reference)
A fix was proposed for ECMAScript (via an opt-in), but was rejected.
 It would have resulted in typeof null === "null".
*/