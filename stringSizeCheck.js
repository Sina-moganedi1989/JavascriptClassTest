const prompt=require("prompt-sync")({sigint:true}); 

const userName = prompt("Enter your username...")//user input

    if (userName.length > 10){  // check if length is greater than 10
        console.log("character too long rejected")
    
    
        }else if(userName.length<5){ // length less than 5
            console.log("character too short Rejected")
        }else{
            console.log("ACCEPTED")
        } 
{
    console.error(error.message);
    // Age must be 18 or abov

}
// sychronous
function f1(){
  console.log("it is my 1st function");
}

function f2(){
  console.log("it is my 2nd function");
  f1();
}

f2();

