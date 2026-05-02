function add(number1 , number2){
    console.log(number1+number2)
}

function add2(number1 , number2){
    return number1+number2
}

function loginUserMessage(username= "sam"){  //this is because if at all the username is undefined so it gives it default value set here sam
    return `${username} just logged in`
}

console.log(loginUserMessage("Ishitva"))

add(3,4)
console.log(add2(3,"4"))
add(3, null)


//passing multiple parameter to function... eg. in case of a e commerce cart
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200))

console.log(calculateCartPrice(200,400,600))

function calculateCartPrice2(val1, val2, ...num1){
    return num1;
    
}
//100 is taken by val1, 200 is taken by val2 rest all is stored in array as num1
console.log(calculateCartPrice2(100,200,300,400))

const user = {
    username: "Ishitva",
    price: 199
}

//this way we can pass object to a function as parameter
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
//we could have also handled the object without even making it 
//handleObject({
//  username: "sam",
//  price: 100
//})


//Passing arrays in function as parameter

const newArray=[200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray))

//the parameter getArray and anyObject are random variable taken as a generic placeholder for any variable array or object 