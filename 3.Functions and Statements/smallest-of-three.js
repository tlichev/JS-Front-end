function smallest(...nums){
    let searchingNum = Number. MAX_VALUE;
    for (const num of nums) {
        if (num <= searchingNum){
        searchingNum = num;
        }
    }
    return searchingNum
}

console.log(smallest(2, 1, -3))