// Q1: Callbacks - Greet User
// Prints a greeting, then executes the callback.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// Demonstrate callback flow.
greetUser("Aarav", showEndMessage);

// Output:
// Hello Aarav
// Welcome to the course!
