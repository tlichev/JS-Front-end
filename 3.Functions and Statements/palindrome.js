function palindrome(numArr){
    numArr.forEach(element => {(element.toString().split("").join("")===element.toString().split("").reverse().join(""))? 
    console.log(true):console.log(false);
        
    });
}

let palindromeFinder = (numArr) => {numArr.forEach(element => {(element.toString().split("").join("")===element.toString().split("").reverse().join(""))? console.log(true):console.log(false)})};


palindromeFinder([123,323,421,121])
// palindrome([32,2,232,1010])