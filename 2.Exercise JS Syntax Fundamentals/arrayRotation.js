function rotation(arr, num){
    for (let i = 0; i < num; i++) {
        let firstEl = arr.shift(0)
        arr.push(firstEl)
    }
    console.log(arr.join(" "))
}
rotation([51, 47, 32, 61, 21], 2)