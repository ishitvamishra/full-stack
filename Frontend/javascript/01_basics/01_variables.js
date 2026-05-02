const accountId= 12345
let accountEmail = "ishitva@gmail.com"
var accountPassword = "123"
accountCity = "Akbarpur"

//accountId=23456  // resignment to constant varibale is not allowed
// console.log(accountId)
accountEmail ="abc@gmail.com"
accountPassword ="256"
accountCity="banaras"


console.table([accountId, accountEmail, accountPassword, accountCity])


/* 
-> prefer not to use var because of issue of block scope and functional scope
-> accountcity= "akbarpur" is also apllicable but not recommended
-> if any varibale is let not initialized then it is undefined as of compiler
-> 

*/