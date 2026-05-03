//array can hold all types of values in it at same time

let arr = [0, 1, 2 ,3, 4, 5]
console.log(arr[1])

let myarr = new Array(10 , 20 , 30 , 40)
console.log(myarr[2]);

// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr);
// arr.unshift(9)
// console.log(arr);
// const newArr= arr.join()
// console.log(newArr);

// const marvel= ["thor", "ironman", "spiderman"]
// const dc=["superman", "flash", "batman"]

// // marvel.push(dc)
// // console.log(marvel) //adds dc array as a data so it becomes array inside array

// const heros = marvel.concat(dc)
// console.log(heros) //same thing can be done using spread operator

// const all_heros = [...marvel, ...dc] //this can be used for more than 2 arrays as well
// console.log(all_heros)

// const number = [1,2,3,4,[5,6,7,[8,9,10],11],12]
// const num=number.flat(Infinity)   //simplifies all sub arrays to a simple single array
// console.log(num)

// // shallow copy: object properties share same refrence 
// // deep copy: object properties do not share same refrence 

// //suppose while extracting data from website we need data in array so it goes as follows

// console.log(Array.isArray("Ishitva"))
// console.log(Array.from("Ishitva"))
// console.log(Array.from({name: "Ishitva"})) // what happens here is it can not convert 
//                                            // because of key value pair 


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))


console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myn2);