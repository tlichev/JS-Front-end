function employess(names){
    let employessRegister = {};
    names.forEach(name => {
        employessRegister[name] = name.length
    });
    for (const key in employessRegister) {
        console.log(`Name: ${key} -- Personal Number: ${employessRegister[key]}`)
    }
}

employess([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)