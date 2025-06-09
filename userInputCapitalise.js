const prompt=require("prompt-sync")({sigint:true}); 

let userNameInput = prompt("Enter your username...") // user input
 let userNameInputToUpperCase = userNameInput.toLocaleUpperCase() //declare container that hold user input in capital letter


if(userNameInput==userNameInputToUpperCase){  // check if user input is capital letters
    console.log('Account created successfully')
}else{
console.log("Sorry please enter CAPITAL letters")}