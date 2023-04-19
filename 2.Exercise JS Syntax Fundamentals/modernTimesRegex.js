function modernTimes2(text){
    let textArr = text.split(" ")
    for (const word of textArr) {
        
        if (word.startsWith("#") && word.length>1) {
            let wordAsArr = word.split("");
            wordAsArr.shift()
            let wordForCheck = wordAsArr.join("")
            if (checkForLetters(wordForCheck)) {
                console.log(wordForCheck)
            }
            
        }
        
    }
    function checkForLetters(wordTest) {
        let pattern = /^[a-zA-Z]+$/;
        return pattern.test(wordTest)
    }
}

// function checkForLetters(wordTest) {
//     let pattern = /^[a-zA-Z]+$/;
//     return pattern.test(wordTest)
// }

modernTimes2('The symbol # is known #variously in English-speaking #r1egions as the #number sign')

// console.log(checkForLetters("reogions"))