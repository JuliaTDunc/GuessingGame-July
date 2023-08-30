const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;

 function checkGuess(n) {
    if(n > secretNumber) {
        console.log("Too high")
        return false;
    }
    if(n < secretNumber) {
        console.log("Too low")
        return false;
    }
    if(n === secretNumber) {
        console.log("Correct!")
        return true;
    }
 }

