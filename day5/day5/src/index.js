// 1. Import the math module
// and use it in the application

// TASK 1:
// Make simple calculator app that asks the user for operation to make
// The application will parse the given operation and call the appropriate function
// from the math module.
// The application will then print the result to the console.
// The application will then ask the user if they want to continue.
// If the user wants to continue, the application will repeat the process.
// If the user does not want to continue, the application will exit.

const math = require("../lib/math")

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('please enter operation (add, sub, mult, divide): ', (op) => {
    rl.question('enter first number: ', (a) => {
        rl.question('enter second number: ', (b) => {
            a = Number(a)
            b = Number(b)

            let result;
            if (op === 'add') {
                result = math.add(a, b)
            }
            else if (op === 'sub') {
                result = math.subtract(a, b)
            }
            else if (op === 'mult') {
                result = math.multiply(a, b)
            }
            else if (op === 'divide') {
                result = math.divide(a, b)
            }
            else {
                console.log("Invalid operation!");
            }
            
            console.log("Result:", result);
            rl.close();
     })
        })
})






// TASK 2 (Bouns 50 points):
// Make a guessing game that asks the user to guess a number between 0 and 50.
// The application will generate a random number between 0 and 50 using the randomTo50 function.
// The application will then ask the user to guess the number.
// The user has 5 attempts to guess the number. if the attempt is wrong, the application will print "Try again 🤔" to the console.
// If the user does not guess the number correctly 5 times, the application will print "You lost the game!! try again 🤔" to the console.
// If the user guesses the number correctly, the application will print "You won the game!! congrats 🥳🥳" to the console.

// TASK 3 (Bouns 50 points):
// Make a function that ask the user the following questions:
// 1. What is your name?
// 2. What is your age? (if age is not a number or is less than 10, the application will print "Invalid age" and end the program)
// 3. What is the Favorite programming language
// Then after the user answers all the questions, the application will print the following.
// console.log("\n--- Summary ---");
// console.log(`Name: ${name || "(no name)"}`);
// console.log(`Age: ${age}`);
// console.log(`Favorite language: ${fav || "(not specified)"}`);
// console.log("----------------\n");
