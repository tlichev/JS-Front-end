function mathOperation(a,b,c){
    let sum = (a,b) => a+b
    let substract = (c) => sum(a,b) - c;
    return substract(c)
}

console.log(mathOperation(23,
    6,
    10
    ))