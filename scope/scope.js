
//Available anywhere in my js file
let globalVar = "I am a global variable"

const scopeDemo = () => {
    //Available anywhere inside the function that they where written
    let functionVar = "I'm a function variable"

    if (true) {
        let blockVar = "I'm a Block level var"
        console.log(globalVar)
        console.log(functionVar)
        console.log(blockVar)

    }
    // console.log(blockVar) Cannot be accessed outside the block it was defined in
}

// console.log(functionVar) Cannot be accessed outside the function it was defined in

scopeDemo()