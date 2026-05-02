const a=10 
let b=20   //these are global scope variable and can be used anywhere
var c=30

if(true){
    const a=100
    let b=200     // these are local scope variable and can only be used inside the block other than var it goes out of the bloack as well
    var c=300

    console.log("Inner: ", a) 
}

console.log(a)
console.log(b)
console.log(c)

//+++++++++++++++ ----------- ++++++++++++++++

function one(){
    const username = "Ishitva"

    function two(){
        const website = "Youtube"      //two can access the variable of one function but the other way around is not true
        console.log(username);         
    }

    //console.log(website)
    two()
}

one()

//+++++++++++++++ ----------- ++++++++++++++++

if(true){
    const username = "ishitva"

    if(true){
        const website = "youtube"
        console.log(username+website);  //can access
    }
    //console.log(website);    //cant access
}
//console.log(username);       //cant access

//+++++++++++++++ ----------- ++++++++++++++++

//addone(5)              //in this type of declaration calling can be done before declaring the function
function addone(num){
    return num+1
}

console.log(addone(5));
 
//addTwo(5)               //but in this type of declaration calling cannot be done before declaring the function as it is stored in a variable 
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));