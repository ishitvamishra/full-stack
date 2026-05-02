const name="ishitva"
const age = 22
  
let gameName = new String('Calf-god') 
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__);  //returns the object of string
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('t'));4
console.log(gameName.substring(0,4))
console.log(gameName.slice(-2,4))   //starting pos = len-val, end position = val-1 
console.log(gameName.trim());      //removes the whitespaces from string
console.log(gameName.replace('f','l'))
console.log(gameName.includes('l'))
console.log(gameName.split('-'))    //returns array splitting from the seprator mentioned

// console.log(name + age + "value");   //this is not good practice 

console.log(`Hello my name is ${name} and my age is ${age}`);  //this is more readable and is a good practice (String interpolation)
