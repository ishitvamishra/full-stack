const user = {
    username: "Ishitva",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);   //here this will refer to the current context of the variables and function inside this instance
        
    }
}

//this keyword is used to refer to the current context of the instance
//this will not work inside function to refer its context it only works in objects

user.welcomeMessage()
user.username="Vashitva"
user.welcomeMessage()

console.log(this);     //here this will show an empty object and when run in window terminal it will show window object with various of its features

//+++++++++++++++ ----------- ++++++++++++++++

function one(){
    let username = "ishitva"
    console.log(this.username);   //it gives undefined as it doesnt work in functions 
}
one()

//+++++++++++++++ Arrow Function ++++++++++++++++

const two = () =>{
    let username= "Ishitva"
    console.log(this.username);  //here as well it will show undefined
}

two()

// const addTwoNum = (num1, num2) => {   //explicit return
//     return num1+num2 
// }

//can also be written as 
//const addTwoNum = (num1 , num2) => (num1 + num2)   //implicit return

const addTwoNum = (num1 , num2) => ({username: "ishitva"})
console.log(addTwoNum(3,4))