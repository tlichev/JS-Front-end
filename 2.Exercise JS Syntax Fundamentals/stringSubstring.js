function substring(word, text){
    lowerCaseText = text.toLowerCase()
    let arrText = lowerCaseText.split(" ")
    flag=false
    for (const wordOfText of arrText) {
        if (word===wordOfText) {
            flag = true
            
        }
        
    }
    if (flag) {
        console.log(word)
        
    }else{
        console.log(`${word} not found!`)
    }
}

substring('javascript',
'JavaScript is the best programming language'
)

substring('python',
'JavaScript is the best programming language'
)