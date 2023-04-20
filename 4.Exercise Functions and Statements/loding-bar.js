function loadingBar(number){
    let firstNum = Math.floor(number*0.1)
    if (firstNum === 10){
        return`100% Complete!`
    }
    return `${number}% [${"%".repeat(firstNum)}${".".repeat(10-firstNum)}]\nStill loading...`
    
}

console.log(loadingBar(100))


