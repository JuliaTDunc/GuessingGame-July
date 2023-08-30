const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;

 function checkGuess(num) {
     if(num > secretNumber) {
        console.log("Too high")
        return false;
    }
    if(num < secretNumber) {
        console.log("Too low")
        return false;
    }
    if(num === secretNumber) {
        console.log("Correct!")
        return true;
    }
 }


 function askGuess() {
    rl.question('Enter a guess ', (answer) => {
        let num = Number(answer)

     if(checkGuess(num) === false) {
        askGuess();
     }

    else{
        console.log("You Win!")
        rl.close()
     }
    })
 }  
