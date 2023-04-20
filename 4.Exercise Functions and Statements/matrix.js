function matrixPrint(num){
    return new Array(num).fill(new Array(num).fill(num)).forEach((row) => console.log(row.join(" ")));
}
console.log(matrixPrint(5))