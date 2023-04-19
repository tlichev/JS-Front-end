function solve(inpArr){
    let odd = 0;
    let even = 0;

    for (let index = 0; index < inpArr.length; index++) {
        if(inpArr[index]%2===0){
            even += inpArr[index]
        }else{
            odd += inpArr[index]
        }
        
        
    }
        

    console.log(even - odd);
}

solve([1,2,3,4,5,6])
solve([2,4,6,8,10])
