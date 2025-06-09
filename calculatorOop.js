const prompt = require("prompt-sync")({ sigint: true });

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2


    }
    setNumber1(num1) {

        if (num1 < 1) {
            console.log("enter number from 1...try again")
            num1 = cal1.setNumber1(parseInt(prompt("enter first number....")))
        } else {
            this.num1 = num1
        }

    }

    getnumber1() {

        return this.num1;
    }
    setNumber2(num2) {
        if (num2 < 1) {
            console.log("enter number from 1....try again...")
            num2 = cal1.setNumber2(parseInt(prompt("enter second number...")))
        } else {
            this.num2 = num2
        }
    }
    getnumber2() {
        return this.num2;
    }
    wellComeMessage() {
        console.log("WELLCOME TO G CALCULATOR")
    }
    addition() {
        let answer = this.getnumber1() + this.getnumber2()
        console.log(`THE ANSWER IS ${answer}`)
    }
    substration() {
        let answer = this.getnumber1() - this.getnumber2()
        console.log(`THE ANSWER IS ${answer}`)
    }
    multiply() {
        let answer = this.getnumber1() * this.getnumber2()
        console.log(`THE ANSWER IS ${answer}`)
    }
    division() {
        let answer = this.getnumber1() / this.getnumber2()
        console.log(`THE ANSWER IS ${answer}`)
    }
    modulo() {
        let answer = this.getnumber1() % this.getnumber2()
        console.log(`THE ANSWER IS ${answer}`)
    }


}
class Calculator2 extends Calculator {
    constructor(symbols) {
        super()
        this.symbols = symbols
    }
    setsymbols(symbol) {
        this.symbols = symbol
    }
    getsymbols() {
        return this.symbols
    }

    checkSymbols() {

        if (this.symbols == "+") {
            cal1.addition()
        } else if (this.symbols == "*") {
            cal1.multiply()
        } else if (this.symbols == "%") {
            cal1.modulo()
        } else if (this.symbols == "-") {
            cal1.substration()
        } else if (this.symbols == "/") {
            cal1.division()
        } else {
            console.log("WRONG OPERATOR")
        }
    }
}
cal1 = new Calculator2()
cal1.wellComeMessage()
num1 = cal1.setNumber1(parseInt(prompt("enter first number....")))
symbols = cal1.setsymbols(prompt("enter symbol - * + / % ....."))
num2 = cal1.setNumber2(parseInt(prompt("enter second number...")))
cal1.checkSymbols()




