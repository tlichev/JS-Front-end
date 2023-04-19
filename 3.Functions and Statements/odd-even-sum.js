function getSum(number){
    let oddSum = 0;
    let evenSum = 0;
    let numArr = number.toString().split("");
    numArr.forEach(element => { (Number(element)%2===0) ? evenSum += Number(element): oddSum+= Number(element)
    });
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}

console.log(getSum(3495892137259234))