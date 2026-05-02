//this is called chaining where the output of first fn is passed onto next fn
const myNumers = [1,2,3,4,5,6,7,8,9,10]
const myNums =  myNumers.map((num)=> { return num+10})

const newNums = myNumers
                        .map((num) => num *10)
                        .map((num)=> num+1)
                        .filter((num)=> num>=40)

console.log(newNums);

//reduce method
const myNums2 = [1,2,3]

/*reduce takes a callback function and an optional initial value. The callback function takes two parameters: 
the accumulator and the current value. The reduce method iterates through the array, applying the callback 
function to each element and updating the accumulator with the result. If an initial value is provided, 
it is used as the starting point for the accumulation; otherwise, the first element of the array is used as the initial accumulator value.
*/

const sum = myNums2.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0) //0 is the initial value of accumulator

console.log(sum); // Output: 6

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    
    {
        itemName: "DSA Course",
        price: 5999
    },

    {
        itemName: "ML Course",
        price: 9999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc+ item.price, 0)

console.log(totalPrice); // Output: 18997