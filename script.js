//Higher Order Functions

// const numbers =[1,2,3,4,5]
// console.log()
// String.toUpperCase()
// numbers.forEach((number)=>{
//     console.log(number * 1.10);
// })

// numbers.map((number)=>{
//     console.log(number *5)
// })




const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const shortWords = words.filter((word)=>{
    return word.length <=3
})
console.log(shortWords)
words.filter((word)=>{console.log(word.length<=3)})

// anything with a shopping cart with a total cost is going to have Reduce in its functionality
const numbers = [1,2,3,4,5,6,7,8,9]
const sum = numbers.reduce((acc, val)=>{
    return acc + val
}, 0)

console.log(sum)