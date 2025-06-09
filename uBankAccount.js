const prompt = require("prompt-sync")({ sigint: true });

userInput=(discription) =>{
    return prompt(discription)
}

//function createAccount() {
const createAccount = () => {

    let userName = prompt("Enter username....")
    let passWord = parseInt(prompt("Enter passwords....."))
    let valid = false



    console.log("account created succeessful...")

    lettersInCaps = prompt("Type L to logIn.....")
    let logInUserName = prompt("provide your username....")
    let logInPasswords = parseInt(prompt("provide password...."))
    try {
        if (logInUserName == userName && logInPasswords == passWord) {
            valid = true
            const userDetails = []

            userDetails.push(userName)
            userDetails.push(passWord)
            userDetails.push(valid)

            console.log(`login succeessfully`)
            console.log(`USERNAME: ${userName}`)
            console.log(`PASSWORD: ${passWord}`)
            console.log(`VALID: ${valid}`)
            console.log(userDetails)

        } else {
            valid = false
            console.log("Invalid password or username TRY again and you have only 3 attempt")
            console.log(`VALID: ${valid}`)
            let count = 1
            while (count < 4) {
                logInUserName = prompt(`${count} attempt....Enter UserName......`)
                logInPasswords = parseInt(prompt(`Enter passwords..........`))
                if (logInUserName == userName && logInPasswords == passWord) {
                    valid = true
                    const userDetails = []

                    userDetails.push(userName)
                    userDetails.push(passWord)
                    userDetails.push(valid)
                    console.log(`login succeessfully`)
                    console.log(`USERNAME: ${userName}`)

                    console.log(`PASSWORD: ${passWord}`);
                    console.log(`VALID: ${valid}`)
                    console.log(userDetails)

                    break
                } else {
                    console.log("try again")
                    console.log(valid)

                }

                count++


            }
            console.log("DONE")
        }
    } catch (error) {
        console.error(error.message)
    }



}


logging = () =>{
 
    let logInUserName = prompt("provide your username....")
    let logInPasswords = parseInt(prompt("provide password...."))
    valid = false

    try {
        if (logInUserName == userName && logInPasswords == passWord) {
            valid = true
            console.log(`login succeessfully`)
            console.log(`USERNAME: ${userName}`)
            console.log(`PASSWORD: ${passWord}`);


        } else {
            console.log("The password/username that you've entered is incorrect.TRY again 3 attempt left then your account will be BLOCKED")
            let count = 1
            while (count < 4) {
                userInput(`${count} attempt......Enter UserName.....`)
                userInput(`Enter passwords............`)
                count++;
                console.log("try again")

            }
            console.log("you have been trying to login....please create account")
            console.log("New account")
            createAccount()
        }

    } catch (error) {
        console.error(error.message)
    }

}
newAccount=(userName, passWord, lettersInCaps) =>{
    try {
        if (lettersInCaps === "C") {
            createAccount(userName, passWord)

        } else if (lettersInCaps === "L") {
            logging()

        }
        else if (lettersInCaps === "O") {

            console.log("Thank you for visiting Ubank App....")
            console.log("GOOD BYE")

        } else {
            console.log("select the right letter in CAPITAL LETTERS")
        }
    } catch (error) {
        console.error(error.message)
    }


}
main=()=> {
    userName = 'moganedi'
    passWord = 12345
    console.log("Well come to UBANK")
    console.log("........................")


    const lettersInCaps = prompt("Type C to create account.... Type L to login......Type O to exit......")



    newAccount(userName, passWord, lettersInCaps)
}
main()
