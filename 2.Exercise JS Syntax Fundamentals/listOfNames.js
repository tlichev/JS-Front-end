function sortedNames(namesArr){
    let sortedNames = [...namesArr].sort((aName, bName) => {
        return aName.localeCompare(bName)
    })


    for (let index = 0; index < sortedNames.length; index++) {
        console.log(`${index+1}.${sortedNames[index]}`)
        
    }
}

sortedNames(["John", "Bob", "Christina", "Ema"])