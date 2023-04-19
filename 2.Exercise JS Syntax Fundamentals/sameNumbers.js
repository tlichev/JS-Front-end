function solve(numAsStr){
    let numArr = numAsStr.toString().split("")
    let flag = true
    let sum = 0
    for (let index = 0; index < numArr.length; index++) {
        sum+=Number(numArr[index])
        if (numArr[0] !==numArr[index]) {
            flag = false
        }
        
    }
    console.log(flag)
    console.log(sum)

}

solve(1234)