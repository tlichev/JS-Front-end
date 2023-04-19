function words(words, text){
    let wordsAsArr = words.split(", ")
    let textArr = text.split(" ");
    for (const wordToRepalce of wordsAsArr) {
        for (const wordInText of textArr) {
            if (wordInText.startsWith("*") && wordInText.length === wordToRepalce.length) {
                textArr[textArr.indexOf(wordInText)] = wordToRepalce
            }
            
        }
        
    }
    console.log(textArr.join(" "));
}

words('great',
'softuni is ***** place for learning new programming languages'
)
words('learning, great',
'softuni is ***** place for ******** new programming languages'
)