# Functions & Control Flow - Cheat Sheet

## Function Declarations
```javascript
// Basic syntax
function functionName(parameters) {
    // code
    return value; // optional
}

// Example
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Function Expressions
```javascript
// Basic syntax
const functionName = function(parameters) {
    // code
    return value; // optional
};

// Example
const add = function(a, b) {
    return a + b;
};
```

## Arrow Functions
```javascript
// Basic syntax
const functionName = (parameters) => {
    // code
    return value; // optional
};

// Single expression (implicit return)
const functionName = (parameters) => expression;

// Examples
const multiply = (a, b) => a * b;
const square = x => x * x;
const greet = name => `Hello, ${name}!`;
```

## Function Parameters
```javascript
// Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Multiple parameters
function createUser(firstName, lastName, age = 18) {
    return { firstName, lastName, age };
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

## Conditional Statements

### if/else
```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Example
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else if (age >= 13) {
        return "Teen";
    } else {
        return "Child";
    }
}
```

### Switch Statement
```javascript
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}

// Example
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day";
    }
}
```

### Ternary Operator
```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse
const result = condition ? "Yes" : "No";

// Example
const isEven = number => number % 2 === 0 ? "Even" : "Odd";

// Nested ternary
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

## Loops

### for Loop
```javascript
// Basic syntax
for (let i = 0; i < 10; i++) {
    // code
}

// Example
function countToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
```

### while Loop
```javascript
// Basic syntax
while (condition) {
    // code
}

// Example
function countdownFrom(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
}
```

### for...of Loop (Arrays)
```javascript
// Basic syntax
for (let item of array) {
    // code
}

// Example
function printArrayItems(items) {
    for (let item of items) {
        console.log(item);
    }
}
```

### for...in Loop (Objects)
```javascript
// Basic syntax
for (let key in object) {
    // code
}

// Example
function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
```

### Break and Continue
```javascript
// Break - exit loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop
    }
    console.log(i);
}

// Continue - skip current iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}
```

## Scope

### Global Scope
```javascript
let globalVar = "I'm global";

function myFunction() {
    console.log(globalVar); // Can access global variables
}
```

### Function Scope
```javascript
function myFunction() {
    let functionVar = "I'm in function scope";
    console.log(functionVar); // Works inside function
}

// console.log(functionVar); // Error: functionVar is not defined
```

### Block Scope
```javascript
if (true) {
    let blockVar = "I'm in block scope";
    console.log(blockVar); // Works inside block
}

// console.log(blockVar); // Error: blockVar is not defined
```

## Hoisting

### Variable Hoisting
```javascript
// var is hoisted but not initialized
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted";

// let/const are hoisted but not initialized
// console.log(letVar); // Error: Cannot access 'letVar' before initialization
let letVar = "I'm not hoisted";
```

### Function Hoisting
```javascript
// Function declarations are fully hoisted
console.log(hoistedFunction()); // Works

function hoistedFunction() {
    return "I'm hoisted!";
}

// Function expressions are not hoisted
// console.log(notHoisted()); // Error
const notHoisted = function() {
    return "I'm not hoisted";
};
```

## Common Patterns

### Function with Validation
```javascript
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Both inputs must be numbers";
    }
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
```

### Loop with Early Exit
```javascript
function findFirstEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            return numbers[i]; // Early exit
        }
    }
    return null; // Not found
}
```

### Array Processing
```javascript
function processArray(numbers) {
    let sum = 0;
    let count = 0;
    
    for (let num of numbers) {
        if (num > 0) {
            sum += num;
            count++;
        }
    }
    
    return count > 0 ? sum / count : 0; // Average
}
```

## Python vs JavaScript Quick Reference

| Feature | Python | JavaScript |
|---------|--------|------------|
| **Function** | `def name():` | `function name() {}` |
| **Lambda** | `lambda x: x*2` | `x => x*2` |
| **If/Else** | `if/elif/else:` | `if/else if/else` |
| **For Loop** | `for i in range(10):` | `for (let i = 0; i < 10; i++)` |
| **While Loop** | `while condition:` | `while (condition) {}` |
| **Break** | `break` | `break` |
| **Continue** | `continue` | `continue` |
| **Scope** | Function/Global | Function/Block/Global |
| **Hoisting** | No | Yes (var/function) |

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `ReferenceError: x is not defined` | Variable not declared | Use `let` or `const` |
| `TypeError: x is not a function` | Calling non-function | Check function name/spelling |
| `SyntaxError: Unexpected token` | Missing braces/semicolons | Check syntax |
| `Infinite loop` | Condition never false | Check loop condition |
| `Undefined return` | Missing return statement | Add return statement |

## Best Practices

### Function Naming
```javascript
// Good
function calculateArea(length, width) { }
function isValidEmail(email) { }
function getUserById(id) { }

// Bad
function calc() { }
function check() { }
function get() { }
```

### Error Handling
```javascript
function safeDivide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}
```

### Loop Optimization
```javascript
// Good - use for...of for arrays
for (let item of array) {
    console.log(item);
}

// Good - use for...in for objects
for (let key in object) {
    console.log(key, object[key]);
}

// Avoid - unnecessary complexity
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```



