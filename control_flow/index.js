
// ==================== Basic Control flow with If/Else


const bouncer = (age) => {

    if (age >= 18) { // condition
        return "Adult";
    } else { // not a condition, a catch all if no condition passes
        return "Minor";
    };
}

console.log(bouncer(18))


// else if chain

const letterGrade = (score) =>{

    if (score >= 90){
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    };
}

console.log(letterGrade(100))

//Switch Statement

const getDayName = (dayNumber) => {
    switch(dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid Day"
    }
}

console.log(getDayName())


// Ternary Operator (inline if statement)
// condition ? True output : False output

const getForcast = (temp) => {
    return temp >= 70 ? "Warm" : "Cold" ;
}

console.log(getForcast(75))

// if else if chain with ternary

// 1st condition ? 1st True : 2nd condition ? 2nd True : False

const getForcast2 = (temp) => {
    return temp >= 70 ? "Warm" : temp >= 55 ? "Cool" : "Cold";
}

console.log(getForcast2(78))

const getForcast3 = (temp) => temp >= 70 ? "Warm" : temp >= 55 ? "Cool" : "Cold";


console.log(getForcast3(78))


// Truthy and Falsey value (does or does not have value)

const checkTruthy = (value) =>{
    if (value) {
        return "Truthy"
    } else {
        return "Falsey"
    }
}

console.log(checkTruthy(''))


