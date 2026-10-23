// Q3. Monthly Expense Tracker
// Example monthly expenses for five categories, in rupees.
const expenses = [
    { category: "Food", amount: 3500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 7000 },
    { category: "Bills", amount: 900 },
    { category: "Leisure", amount: 1400 }
];

let total = 0;

// Add each category's expense to the running total.
for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
let finalAmount = total;
finalAmount += total * 0.10; // Add 10% tax using an assignment operator.

console.log(`Total expenses: ₹${total.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
