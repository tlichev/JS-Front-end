function paswordValidator(text){
    const lengthValidator = (pass) => pass.length >= 6 && pass.length <=10;
    const letterValidator = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const digitValidator = (pass) => [...pass.matchAll(/\d/g)].length >=2;
    let valid = true

    if (!lengthValidator(text)) {
        console.log("Password must be between 6 and 10 characters")
        valid = false
    }

    if (!letterValidator(text)) {
        console.log("Password must consist only of letters and digits")
        valid = false
    }

    if (!digitValidator(text)) {
        console.log("Password must have at least 2 digits")
        valid = false
    }


    if (valid) {
        console.log("Password is valid")
    }
}   

paswordValidator('logIn')