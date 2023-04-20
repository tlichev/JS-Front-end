function factorielDivision(num1, num2){

    return (factorielNum(num1)/ factorielNum(num2)).toFixed(2);
    function factorielNum(number){
        if (number ===1){
            return number;

        }

    return number * factorielNum(number-1);
    }
}

console.log(factorielDivision(6, 2))