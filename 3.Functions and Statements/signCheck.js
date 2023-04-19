function sighCheck (...nums){
    return nums
    .filter((num) => num <  0)
    .length %2 ===0 ? "Positive" : "Negative";
}



console.log(sighCheck( 5,
 12,
-15
))


console.log(sighCheck(-6,
    -12,
     14
    ))
console.log(sighCheck(-1,
    -2,
    -3
    ))