//! LOOP PRACTICE
// -----------------------------------------------------------------

//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.

// -----------------------------------------------------------------
//! If the input is shorter than 4 characters, nothing should be logged.

// -----------------------------------------------------------------
//! Pick a random number. Prompt the user to guess a number. If the number is correct,
//! end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

// -----------------------------------------------------------------
//! Using nested for loops, create and log the following pattern:
/*
//!    *
//!    **
//!    ***
//!    ****
//!    *****
*/

// -----------------------------------------------------------------
//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

let counter = 0;
let coin;

// 0 is heads, 1 is tails
while (coin !== 0) {
    coin = Math.floor(Math.random() * 2);
    counter++;
}

console.log(`It took ${counter} tries to get heads.`);

// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.

const firstName = prompt("Enter your name.");
const num = prompt("Enter a number between 1 and 100");

if (num % 2 == 0) {
    console.log("Your number is even.");
} else {
    console.log("Your number is odd.");
}

if (num % 2 > 50) {
    console.log("Your number is greater than 50.");
} else {
    console.log("Your number is less than or equal to 50.");
} 

for (let i = 1; i <= num; i++) {
    console.log(i);
}

for (let i = 100; i >= num; i--) {
    console.log(i);
}

if (firstName.toLowerCase() === "briar") {
    alert("Great Name!");
}

// -----------------------------------------------------------------
//! Take the following arrays: `[-1,-2,2,10,7,8]` and `[4,-2,2,7,9,5]`
//! and see how many items the two arrays share in common.
//! Do this without prototypical functions (ex. array.filter and array.includes).
//! Hint: use a nested loop

const array1 = [-1,-2,2,10,7,8];
const array2 = [4,-2,2,7,9,5];
let inCommon = 0;

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++); {
        if (array1[i] === array2[j]) {
            inCommon++;
        }
    }
}

console.log(`There are $(inCommon} items that are the same)`);
