// Q7. Smart Guessing Game (Number Range)
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Change this test value to try other guesses.

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers of the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log(`Secret number (for testing): ${secretNumber}`);
