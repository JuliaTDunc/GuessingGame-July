const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let askRange = function () {
    let secretNumber;

    rl.question("Enter a min number: ", (min) => {
        rl.question("Enter a max number: ", (max) => {
            console.log("I'm thinking of a number between " + min + " and " + max + "...")
            let newMin = Number(min);
            let newMax = Number(max);
            secretNumber = randomInRange(newMin, newMax)
            askGuess()

        })
    })
    function randomInRange(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min);
    }


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
    });
 } ;
}

askRange();