const prompt=require("prompt-sync")({sigint:true}); 


const firstNumner = parseInt(prompt("enter you  first number.....")) 
const secondNumber = parseInt(prompt("enter you  second number.....")) 

let sumNumber = firstNumner + secondNumber
let reminderNumber = sumNumber%2
console.log(`The reminder of the sum of num1 and num2 is ${reminderNumber}`);

