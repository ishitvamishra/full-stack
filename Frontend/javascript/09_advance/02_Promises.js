/*  
Promises in javascript are used to handle asynchronous operations. They represent a value that may be available now, in the future, or never.
A promise can be in one of three states: pending, fulfilled, or rejected.

1. Pending: The initial state of a promise. It means that the asynchronous operation is still in progress and the final value is not yet available.
2. Fulfilled: The state of a promise when the asynchronous operation has completed successfully and the final value is available. The promise is considered "resolved" at this point.
3. Rejected: The state of a promise when the asynchronous operation has failed and an error is available. The promise is considered "rejected" at this point.

Before consuming a promise, you can attach callbacks to handle the fulfilled or rejected states using the .then() and .catch() methods respectively.
The .then() method takes two arguments: a callback function for the fulfilled state and an optional callback function for the rejected state.
The .catch() method is used to handle any errors that may occur during the asynchronous operation.
*/

//Creating a promise : A promise is created using the Promise constructor, which takes a function as an argument.
// This function is called the executor function and it has two parameters: resolve and reject. 
// The resolve function is used to fulfill the promise, while the reject function is used to reject the promise.
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // if there is an error, we can call reject() with an error message or object
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//you can alsso create promise without storing it in a variable, but you won't be able to consume it later on.
// you will have to consume it immediately after creating it.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// you can also pass data to the resolve function, which will be available in the .then() callback function.
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// you can also handle errors using the reject function and the .catch() method.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// you can also chain multiple .then() methods to handle the fulfilled state of a promise and the .catch() method to handle any errors that may occur.
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



// async await : Async functions are a more elegant way to handle promises.
// They allow you to write asynchronous code that looks synchronous.
// To consume a promise using async await, you need to define an async function and use the await keyword to wait for the promise to resolve or reject.
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// you can also use async await to consume promises that are returned by functions like fetch() which is used to make network requests.
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//another way to consume the fetch promise is to use the .then() method, which is more traditional and widely used.
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// A fetch promise does not reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

/*
Working of fetch
                response = fetch('something', "here you can data that you want to send")
                        __________________________|____________________
                       |                                               |
                Data : ___(remains empty user)                        Web Browser/ node(resource needed to send netwrok request)
                        has no access to alter its value                                    |
                onfulfilled: []                                                             |-> Network Request
                onRejection: []                                                                         |
                        |-> either of these 2 are responsible for filling value in data                 |-> fulfilled (request reached even if it throws error(404)) -> response value is sent to onfulfilled array 
                        value filled in data is reflected to global variable response                   |-> request rejected -> response of rejected is sent to onRejection array
                                                                                                        (in any case only one of the array will be filled because either request is rejected or responded)
*/