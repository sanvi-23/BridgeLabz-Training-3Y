// Q7: Closures - Make Multiplier
// The returned function remembers `multiplier` from its outer function scope.

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

const double = makeMultiplier(2);
console.log(double(5)); // 10

// Closure explanation:
// Even after makeMultiplier() has returned, the inner function retains
// access to the multiplier variable from the scope where it was created.
