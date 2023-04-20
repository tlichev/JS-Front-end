function dicgtionary(infoArr){
    let dict= {};
    infoArr.forEach(element => {
        let obj = JSON.parse(element);
        let arr = Object.entries(obj);
        dict[arr[0][0]]= arr[0][1];
    });
    let sortedDicct = Object.entries(dict).sort((a,b) =>{
        let AChar = a[0];
        let Bchar = b[0];
        return AChar.localeCompare(Bchar);
    })
    sortedDicct.forEach(element => {
        console.log(`Term: ${element[0]} => Definition: ${element[1]}`)
    });

}
dicgtionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]
    )