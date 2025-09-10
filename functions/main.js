console.log("Hello from JS")


//Function Declaration (hoisted) ========================================

function firstFunc(){
    return 'Hello, World';
};

console.log(firstFunc());

//parameters (function variables)

function greet(name){
    return `Hello ${name}`;
};

console.log(greet('Dylan')) ;// Dylan is the argument (Value I pass in for parameter 'name')
console.log(greet('Barnie'));

//function expressions ========================= (More modern than declarations)

const greetExpressionFunc = function(name){
    return `Hello ${name}`
};

console.log(greetExpressionFunc('Billy'));


//Arrow function DO THIS ONE =========================================

const greetArrow = (firstName, lastName) => {
    return `Hello ${firstName} ${lastName}`;
};

console.log(greetArrow('Frank', 'Abignale'));

// Short hand Arrow Function (similar to Python lambda)

const greetShort = (a,b) => a + b;

console.log(greetShort(1,2))

