function solve(numArr){
    let outputArr = [];
    let acendingArr = [...numArr].sort((aNum, bNum) =>{
        return aNum - bNum});
    // console.log(acendingArr)

    let decendingArr = [...numArr].sort((aNum, bNum) => {
        return bNum - aNum})
        // console.log(decendingArr)

    for (let index = 0; index < numArr.length; index++) {
        if (outputArr.length === numArr.length) {
            break
        }
        if (index%2===0) {
            outputArr.push(acendingArr.shift())
            
        }else{
            outputArr.push(decendingArr.shift())
        }
        
    }
    return outputArr
    
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])