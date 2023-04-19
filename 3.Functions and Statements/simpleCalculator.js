function simpleCalc (firstNum, secondNum, operation){
    let multiply = (a, b) => a*b;
    let divide = (a, b) => a/b;
    let add = (a, b) => a+b;
    let subtract = (a, b) => a-b;
    let outputObj = {
        multiply:multiply,
        add:add,
        subtract:subtract,
        divide:divide
    }
    return outputObj[operation](firstNum, secondNum)
}

console.log(simpleCalc(5,
    5,
    'multiply'
    ))

    console.log(simpleCalc(40,
        8,
        'divide'
        ))