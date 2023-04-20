function oddOccurences(wordsAsStr){
    let words = wordsAsStr.toLowerCase().split(" ");
    let counterOfWords= {};

    let output = ""

    for (const word of words) {
        if (!counterOfWords.hasOwnProperty(word)) {
            counterOfWords[word]=1;

        }else{
            counterOfWords[word]+=1;
        }
    }

    for (const key in counterOfWords) {
        if (counterOfWords[key]%2!==0) {
            output += key+" "
            
            
        }
    }
   console.log(output)
}

oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')