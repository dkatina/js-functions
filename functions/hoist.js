
console.log(hoistedFunction()); //Able to use function before it is initialized


// function Declaration - gets hoisted to the top of the page
function hoistedFunction(){ //ES5
    return "I'm hoisted"
}


// console.log(notHoisted()) cannot be referenced before initializtion on line 14

//function Expression - doesn't get hoisted
const notHoisted = function(){ //ES6
    return "I'm not hoisted"
}

console.log(hoistedVar) //undefined (this var exists but hasn't recieved a value yet)

// Var Variables are hoisted but not initialized
var hoistedVar = "I'm Hoisted" //ES5


// console.log(letVar) Cannot access let/const vars before they are initialized

let letVar = 'Not hoisted' //ES6