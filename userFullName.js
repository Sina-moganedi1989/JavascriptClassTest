const prompt=require("prompt-sync")({sigint:true}); 

class UserFullName{
    constructor(fullName){
        this._fullName=fullName
    
    }
    setfullName(fullName){
        if(fullName.length<10){
            console.log("YOU FULL NAME IS TOO SHORT")  
            fullName= user1.setfullName(prompt("Enter Fulltname......."))
        }else{

        this._fullName = fullName
    }
}

    getFullName(){
        return this._fullName
        
    }

}
class UserNames extends UserFullName{
    constructor(fullName){
        super()
        this._fullName=fullName
    }
    userDetails(){
        console.log("YOUR FULL NAME IS: " + this._fullName)
        console.log("TODAY'S DATE IS " + new Date().toLocaleDateString())
}
}
user1= new UserNames()
fullName= user1.setfullName(prompt("Enter Firstname......."))
user1.userDetails()