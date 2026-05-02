console.log("2">1)
console.log("02">1);

console.log(null >0)
console.log(null ==0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

console.log("2" === 2);  // this is strict check, checks the datatype as well

/*
the reason why null > 0 and null ==0 is false and nul >= 0 is that 
equality and comparisons work differently where comparisions convert
null to number and equality does not thats why in 1st and 3rd result 
is according to the number 0 not null
*/
