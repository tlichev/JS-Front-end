function vacation(number, groupType, day){
    let price;
    switch (day) {
        case "Friday":
            if (groupType ==="Students") {
                price = number*8.45
                if (number >=30) {
                    price *=0.85
                    console.log(`Total price: ${price.toFixed(2)}`)
                }else{
                    console.log(`Total price: ${price.toFixed(2)}`)
                }
                
            }
            else if (groupType ==="Business") {
                price = number*10.90
                if (number >=100) {
                    price = (number-10)*10.90
                    console.log(`Total price: ${price.toFixed(2)}`)
                }else{
                    console.log(`Total price: ${price.toFixed(2)}`)
                }
            }

            else if (groupType ==="Regular") {
                price = number*15
                if (10<=number&&number<=20) {
                    price *=0.95
                    console.log(`Total price: ${price.toFixed(2)}`)
                }else{
                    console.log(`Total price: ${price.toFixed(2)}`)
                }
            }
            break;


        case "Saturday":
        if (groupType ==="Students") {
            price = number*9.80
            if (number >=30) {
                price *=0.85
                console.log(`Total price: ${price.toFixed(2)}`)
            }else{
                console.log(`Total price: ${price.toFixed(2)}`)
            }
            
        }
        else if (groupType ==="Business") {
            price = number*15.60
            if (number >=100) {
                price = (number-10)*15.60
                console.log(`Total price: ${price.toFixed(2)}`)
            }else{
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }

        else if (groupType ==="Regular") {
            price = number*20
            if (10<=number&&number<=20) {
                price *=0.95
                console.log(`Total price: ${price.toFixed(2)}`)
            }else{
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }
        break;

    
    case "Sunday":
        if (groupType ==="Students") {
            price = number*10.46
            if (number >=30) {
                price *=0.85
                console.log(`Total price: ${price.toFixed(2)}`)
            }else{
                console.log(`Total price: ${price.toFixed(2)}`)
            }
            
        }
        else if (groupType ==="Business") {
            price = number*16
            if (number >=100) {
                price = (number-10)*16
                console.log(`Total price: ${price.toFixed(2)}`)
            }else{
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }

        else if (groupType ==="Regular") {
            price = number*22.50
            if (10<=number&&number<=20) {
                price *=0.95
                console.log(`Total price: ${price.toFixed(2)}`)
            }else{
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }
        break;




    
        default:
            break;
    }
}

vacation(30,
    "Students",
    "Sunday"
    )

vacation(40,
    "Regular",
    "Saturday"
    )