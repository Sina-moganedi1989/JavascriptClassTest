const prompt=require("prompt-sync")({sigint:true}); // import prompt


let badWords =new Set();

badWords.add("bad");
badWords.add("fuck");
badWords.add("ashole");
badWords.add("ceo");


//console.log(tempset.has(99));

const checkOffensiveWords = prompt("tel us about yourself in one word.......")


//check if the inputs words does not have offensive words, then it will return true
try {
    if(badWords.has(checkOffensiveWords)){
        throw new Error("Offensive Word found")
        }
        else{
            console.log("NO Offensive words")
        }
} catch (error) {
    console.error(error.message)
}



