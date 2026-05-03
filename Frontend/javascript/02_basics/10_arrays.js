//array can hold all types of values in it at same time

let arr = [0, 1, 2 ,3, 4, 5]
console.log(arr[1])

let myarr = new Array(10 , 20 , 30 , 40)
console.log(myarr[2]);


arr.push(6)  //push adds an element at the end of the array and returns the new length of the array
console.log(arr) 

arr.pop()  //pop removes the last element of the array and returns the removed element
console.log(arr) 

arr.shift() //shift removes the first element of the array and returns the removed element
console.log(arr); // returns [ 1, 2, 3, 4, 5 ] because 0 is removed from the array

arr.unshift(9)
console.log(arr); //returns [ 9, 1, 2, 3, 4, 5 ] because 9 is added at the beginning of the array

const newArr= arr.join()
console.log(newArr); //returns ['9,1,2,3,4,5'] because it converts the array into a string and joins the elements with a comma

const newArr2 = arr.join(' - ')
console.log(newArr2); //returns ['9 - 1 - 2 - 3 - 4 - 5'] because it converts the array into a string and joins the elements with ' - '

const marvel= ["thor", "ironman", "spiderman"]
const dc=["superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel) //adds dc array as a data so it becomes array inside array

const heros = marvel.concat(dc)
console.log(heros) //same thing can be done using spread operator

const all_heros = [...marvel, ...dc] //this can be used for more than 2 arrays as well
console.log(all_heros) // returns [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] because it combines the elements of both arrays into a single array

const number = [1,2,3,4,[5,6,7,[8,9,10],11],12]
const num=number.flat(Infinity)   //simplifies all sub arrays to a simple single array , infinity is used to flatten all the nested arrays no matter how deep they are
console.log(num) // returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] because it flattens the nested arrays into a single array

// shallow copy: object properties share same refrence 
// deep copy: object properties do not share same refrence 

//suppose while extracting data from website we need data in array so it goes as follows

console.log(Array.isArray("Ishitva"))  //returns false because it is a string and not an array
console.log(Array.from("Ishitva"))  //returns [ 'I', 's', 'h', 'i', 't', 'v', 'a' ] because it converts the string into an array of characters
console.log(Array.from({name: "Ishitva"})) // returns [ undefined ] because it tries to convert the object into an array but it does not have a length property so it returns an array with one element which is undefined


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //returns [ 100, 200, 300 ] because it creates a new array with the given elements as its elements


console.log("A ", myarr);
// A  [ 10, 20, 30, 40 ]

//slice does not change the original array but splice changes the original array
//slice(start, end) end is not included
//slice returns a new array containing the extracted elements and splice returns an array containing the deleted elements


const myn1 = myarr.slice(1, 3)

console.log(myn1); //[ 20, 30 ]

console.log("B ", myarr);  // B  [ 10, 20, 30, 40 ]

//splice(start, deleteCount, item1, item2, itemN) deleteCount is the number of elements to be deleted from the start index and item1, item2, itemN are the elements to be added at the start index after deletion
//splice returns the deleted elements as an array and slice returns the extracted elements as an array

const myn2 = myarr.splice(1, 3) // here we are deleting 3 elements from index 1 and adding nothing in place of it
console.log("C ", myarr);  // C  [ 10 ] because 20, 30, 40 are deleted from the original array and nothing is added in place of it
console.log(myn2);  // myn2 contains the deleted elements: [ 20, 30, 40 ]