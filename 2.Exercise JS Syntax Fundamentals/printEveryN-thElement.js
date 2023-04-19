function solve(arr, num){
    let outputArrr = [];
    for (let index = 0; index < arr.length; index+=num) {
        outputArrr.push(arr[index])
        
    }
    return outputArrr
}

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
))