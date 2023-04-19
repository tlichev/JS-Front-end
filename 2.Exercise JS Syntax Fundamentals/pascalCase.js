function pascalCaseSpliter(text){
    let output = "";
    for (const letter of text) {
        const asciiCode = letter.charCodeAt(0);
        if (asciiCode >=65 && asciiCode <=90) {
            if (output.length>0) {
                output += ", "
                
            }
        output += letter;
        
            
        }else{
            output += letter
        }
        
    }
    console.log(output)
}

pascalCaseSpliter("PsjdnisndOklPjdxsjc")