function perfectNumber(number) {
  let flag = false;
  function perfectChecker(num) {
    let sum = 0;
    for (let i = 0; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
  if (perfectChecker(number)===number) {
    return `We have a perfect number!`
  }else{
    return `It's not so perfect.`
  }
}


console.log(perfectNumber(28))