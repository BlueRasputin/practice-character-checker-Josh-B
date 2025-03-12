const readline = require('readline-sync');
// let gregarious = "gregarious";
// let ans = readline.question("What is the letter at index position 8 in the word gregarious?")

// if (ans == gregarious[8]) {
//     console.log("Correct! " + ans + " is the letter at index position 8 in the word gregarious")   
// } else {
//     console.log("Incorrect! " + ans + " is not the letter at index position 8 in the word gregarious")
// }


//Step 1: ask the user for a word or phrase
let userInput = readline.question("Please enter a word or phrase: ");

//Step 2: ask the user for a index number
let index = readline.questionInt("Please enter an index number: ");

//Step 3: Get the character at that index number
let character = userInput[index];

//Step 4: Display the character to the user
if (character !== undefined) {
    console.log(`The character at index ${index} is ${character}`);
} else {
    console.log("Invalid index.  Please enter a number within the range.");
}