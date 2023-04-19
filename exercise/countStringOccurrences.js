function solve(text, word){
    let counter = 0;
    arr = text.split(" ")
    for (const i of arr) {
        if (i===word){
            counter +=1
        }
        
    }
    
    console.log(counter)
}


solve('This is a word and it also is a sentence',
'is'
)
solve('softuni is great place for learning new programming languages',
'softuni'
)
