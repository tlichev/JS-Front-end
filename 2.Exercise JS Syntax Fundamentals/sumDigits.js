function sumDigits(nums){
    let sum = 0
    let numsAsStr = nums.toString()
    for (const el of numsAsStr) {
        sum += Number(el)
        
    }
    console.log(sum)
}

sumDigits(1234)