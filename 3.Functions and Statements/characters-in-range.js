function printAsciiChars(firstChar, secondChar){
    let firstCharCode = firstChar.charCodeAt();
    let secondCharCode = secondChar.charCodeAt();
    let start;
    let end;
    let output = []
    if (firstCharCode <= secondCharCode) {
        start = firstCharCode;
        end = secondCharCode;
        
    }else{
        end = firstCharCode;
        start = secondCharCode;
    }
    for (let charCode = start+1; charCode < end; charCode++) {
        
        output.push(String.fromCharCode(charCode));
        
    }

    console.log(output.join(" "))
}

printAsciiChars('#',
':'
)