function solve(startNum, endNum){
    let sum=0;
    let arr =[]
    for (let i = startNum; i <= endNum; i++) {
        arr.push(i)
        sum+=i;
        
        
    }
    console.log(arr.join(" "))
    console.log(`Sum: ${sum}`)
}

solve(50, 60)