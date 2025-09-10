
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

// ========================== Assignment 2 ===========================

// 1. Create a function that determines if a number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        return 'Positive'
    } else if (number < 0) {
        return 'Negative'
    } else {
        return 'Zero'
    }
}

// 2. Create a function that determines the season based on month
function getSeason(month) {
    if ( month <= 2) {
        return 'Winter'
    } else if (month <= 5) {
        return 'Spring'
    } else if (month <= 8) {
        return 'Summer'
    } else if (month <= 11) {
        return 'Fall'
    } else {
        return 'Winter'
    }
}

// 3. Create a function that calculates discount based on age
function calculateDiscount(age, price) {
    if (age < 18) {
        return price / 3
    } else if (age < 65) {
        return price
    } else {
        return price / 2
    }
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
console.log("Discount for 30-year-old, $100:", calculateDiscount(30, 100)); 