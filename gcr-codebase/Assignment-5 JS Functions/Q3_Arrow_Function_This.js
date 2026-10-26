// Q3: Arrow Function and `this`
// Arrow functions do not have their own `this`; they inherit it
// from the surrounding scope. In this example, `this.name` is undefined.

const user = {
    name: "Aarav",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined in a typical Node.js CommonJS file

// Fix: use a normal function, which receives `this` from the call site.
const correctedUser = {
    name: "Aarav",
    showName: function () {
        console.log(this.name);
    }
};

correctedUser.showName(); // Aarav

// Note: top-level `this` behavior can differ by environment/module type,
// but the arrow function still does not bind `this` to the user object.
