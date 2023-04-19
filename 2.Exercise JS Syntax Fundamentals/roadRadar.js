function drive(speed, area){
    let limit = 0;
    switch (area) {
        case "motorway":
            limit = 130;

            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
                
            }else{
                let difference = speed - limit;
                let message = "";
                switch (true) {
                    case difference <= 20:
                        message = "speeding";
                        break;
                    case difference <= 40:
                        message = "excessive speeding";
                        break;

                    
                
                    default:
                        message="reckless driving"
                        break;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${message}`)
            }
            break;
        case "interstate":
            limit = 90;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
                
            }else{
                let difference = speed - limit;
                let message = "";
                switch (true) {
                    case difference <= 20 :
                        message = "speeding";
                        break;
                    case difference <= 40:
                        message = "excessive speeding";
                        break;

                    
                
                    default:
                        message="reckless driving"
                        break;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${message}`)
            }
            break;

        case "city":
            limit = 50;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
                
            }else{
                let difference = speed - limit;
                let message = "";
                switch (true) {
                    case difference <= 20 :
                        message = "speeding";
                        break;
                    case difference <= 40:
                        message = "excessive speeding";
                        break;

                    
                
                    default:
                        message="reckless driving"
                        break;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${message}`)
            }
            break;

        case "residential":
            limit = 20;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
                
            }else{
                let difference = speed - limit;
                let message = "";
                switch (true) {
                    case difference <= 20 :
                        message = "speeding";
                        break;
                    case difference <= 40:
                        message = "excessive speeding";
                        break;

                    
                
                    default:
                        message="reckless driving"
                        break;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${message}`)
            }
            break;

        default:
            break;
    }
}


drive(21, 'residential')