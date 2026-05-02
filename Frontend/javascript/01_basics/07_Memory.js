let charactername="hulk"
let anotherName= charactername;
anotherName="Thor"
console.log(charactername);
console.log(anotherName);

let user1 ={
    userName: "Ishitva",
    Email: "123@gmail.com"
}

let user2= user1

user2.Email="246@gmail.com"
console.log(user1.Email);
console.log(user2.Email);



/*
since primitive datatype are give stack memory and thier copy is given
when asked so any changes made in anotherName will not reflect in name 
whereas in case of refrenced data type, they are given heap memory since
refrence of the original location is given so any changes made in its 
duplicate variabke will akso reflect in the original varible.
*/
