# Lesson 2: In-Class Assignments

## Integrated Practice Sessions

These assignments are designed to be completed during the lesson as you learn each concept, rather than all at the end.

## Assignment 1: Function Basics (10 minutes)

### Objective
Practice creating different types of functions and understanding their syntax.

### Instructions
1. Add this code to your existing JavaScript file:

```javascript
// 1. Create a function declaration that calculates the area of a rectangle


// 2. Create a function expression that calculates the perimeter


// 3. Create an arrow function that calculates the diagonal


// 4. Test all functions
let length = 5;
let width = 3;

console.log("=== Rectangle Calculations ===");
console.log(`Length: ${length}, Width: ${width}`);
console.log(`Area: ${calculateArea(length, width)}`);
console.log(`Perimeter: ${calculatePerimeter(length, width)}`);
console.log(`Diagonal: ${calculateDiagonal(length, width).toFixed(2)}`);
```

### Expected Output
Your console should display:
- Length and width values
- Calculated area
- Calculated perimeter
- Calculated diagonal (rounded to 2 decimal places)

### Success Criteria
- [ ] Function declaration works correctly
- [ ] Function expression works correctly
- [ ] Arrow function works correctly
- [ ] All calculations are accurate
- [ ] Output is clearly formatted

---

## Assignment 2: Decision Making (10 minutes)

### Objective
Practice using conditional statements to make decisions in your code.

### Instructions
1. Add this code to your existing JavaScript file:

```javascript
// 1. Create a function that determines if a number is positive, negative, or zero
function checkNumber(number) {
    // Your code here
}

// 2. Create a function that determines the season based on month
function getSeason(month) {
    // Your code here
}

// 3. Create a function that calculates discount based on age
function calculateDiscount(age, price) {
    // Your code here
}

// 4. Test all functions
console.log("=== Decision Making Practice ===");
console.log("Number check:", checkNumber(5)); // Should be "Positive"
console.log("Number check:", checkNumber(-3)); // Should be "Negative"
console.log("Number check:", checkNumber(0)); // Should be "Zero"

console.log("Season check:", getSeason(6)); // Should be "Summer"
console.log("Season check:", getSeason(12)); // Should be "Winter"

console.log("Discount for 16-year-old, $100:", calculateDiscount(16, 100)); // Should be 10
console.log("Discount for 70-year-old, $100:", calculateDiscount(70, 100)); // Should be 20
console.log("Discount for 30-year-old, $100:", calculateDiscount(30, 100)); // Should be 0
```

### Expected Output
Your console should display:
- Number classification results
- Season determination results
- Discount calculation results

### Success Criteria
- [ ] Number classification works for all cases
- [ ] Season determination works for all months
- [ ] Discount calculation works for all age groups
- [ ] All output matches expected results

---

## Assignment 3: Loop Practice (10 minutes)

### Objective
Practice using different types of loops to solve problems.

### Instructions
1. Add this code to your existing JavaScript file:

```javascript
// 1. Create a function that prints multiplication table
function multiplicationTable(number) {
    console.log(`=== Multiplication Table for ${number} ===`);
    // Your code here
}

// 2. Create a function that finds the sum of all numbers in an array
function sumArray(numbers) {
    // Your code here
}

// 3. Create a function that finds the largest number in an array
function findLargest(numbers) {
    // Your code here
}

// 4. Create a function that prints numbers 1 to 100, but skips multiples of 7
function printNumbersSkipSeven() {
    // Your code here
}

// 5. Test all functions
console.log("=== Loop Practice ===");
multiplicationTable(5);

console.log("\n=== Array Sum ===");
const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of ${testNumbers}: ${sumArray(testNumbers)}`);

console.log("\n=== Find Largest ===");
console.log(`Largest in ${testNumbers}: ${findLargest(testNumbers)}`);

console.log("\n=== Numbers 1-100 (skip multiples of 7) ===");
printNumbersSkipSeven();
```

### Expected Output
Your console should display:
- Multiplication table for 5
- Sum of the test array (55)
- Largest number in the test array (10)
- Numbers 1-100 with multiples of 7 skipped

### Success Criteria
- [ ] Multiplication table is complete and correct
- [ ] Array sum calculation is accurate
- [ ] Largest number finding works correctly
- [ ] Skip multiples of 7 works properly
- [ ] All output is clearly formatted

---

## Assignment 4: Number Guessing Game (15 minutes)

### Objective
Create a complete number guessing game using functions, conditionals, and loops.

### Instructions
1. Create a number guessing game with the following features:

```javascript
// Number Guessing Game
function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7;
    
    console.log("=== Number Guessing Game ===");
    console.log("I'm thinking of a number between 1 and 100.");
    console.log(`You have ${maxAttempts} attempts to guess it!`);
    
    // Simulate guesses (in real app, this would be user input)
    const guesses = [50, 25, 75, 60, 65, 63, 64];
    
    for (let guess of guesses) {
        attempts++;
        console.log(`\nAttempt ${attempts}: You guessed ${guess}`);
        
        // Your code here - add the game logic
        
        if (attempts >= maxAttempts) {
            console.log(`\n💀 Game Over! The secret number was ${secretNumber}`);
            return;
        }
    }
}

// Additional functions for the game
function getHint(guess, secretNumber) {
    // Your code here - provide hints based on how close the guess is
}

function calculateScore(attempts, maxAttempts) {
    // Your code here - calculate score based on attempts used
}

// Run the game
numberGuessingGame();
```

### Game Requirements
- Generate a random number between 1 and 100
- Allow up to 7 guesses
- Provide feedback (too high, too low, correct)
- Show the secret number if the player loses
- Add a hint system that gives feedback on how close the guess is
- Calculate and display a score based on attempts used

### Expected Output
Your console should display:
- Game introduction and rules
- Each guess attempt with feedback
- Final result (win or lose)
- Score calculation

### Success Criteria
- [ ] Game generates random numbers correctly
- [ ] Guess feedback works properly
- [ ] Game ends after 7 attempts or correct guess
- [ ] Hint system provides useful feedback
- [ ] Score calculation is accurate
- [ ] Game is fun and engaging

---

## Extension Activities (For Fast Finishers)

### Extension 1: Advanced Calculator
Create a calculator that can handle multiple operations in sequence:

```javascript
function advancedCalculator() {
    // Your code here
    // Allow user to perform multiple calculations
    // Keep running total
    // Handle errors gracefully
}
```

### Extension 2: Password Generator
Create a function that generates random passwords:

```javascript
function generatePassword(length, includeSymbols = true) {
    // Your code here
    // Generate random password with specified length
    // Include letters, numbers, and optionally symbols
}
```

### Extension 3: Data Analysis
Create functions to analyze an array of numbers:

```javascript
function analyzeNumbers(numbers) {
    // Your code here
    // Find min, max, average, median
    // Count even/odd numbers
    // Find duplicates
}
```

---

## Help Resources
- **Function Syntax**: Remember the three types: declaration, expression, arrow
- **Conditionals**: Use if/else for decisions, switch for multiple cases
- **Loops**: for loops for counting, while loops for conditions, for...of for arrays
- **Scope**: Variables declared with let/const are block-scoped
- **Return Values**: Functions without return statements return undefined

## Submission Guidelines
- Save all files in your lesson_2_project folder
- Test each assignment in the browser
- Check console output for all assignments
- Ask for help if you encounter any errors


