const prompt=require("prompt-sync")({sigint:true}); 

const number = parseInt(prompt("Enter a number: "));
if(number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}