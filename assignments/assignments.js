
function calculateArea(length, width){
    return length * width
}

const calculatePerimeter = function(length, width){
    return (length + width) * 2
}

const calculateDiagonal = (length, width) =>{
    return Math.sqrt(length**2 + width**2)
}



let length = 5;
let width = 3;

console.log("=== Rectangle Calculations ===");
console.log(`Length: ${length}, Width: ${width}`);
console.log(`Area: ${calculateArea(length, width)}`);
console.log(`Perimeter: ${calculatePerimeter(length, width)}`);
console.log(`Diagonal: ${calculateDiagonal(length, width).toFixed(2)}`);