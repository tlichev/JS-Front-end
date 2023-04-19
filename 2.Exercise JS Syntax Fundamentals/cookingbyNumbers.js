function solve(number, ...operations){
    for (const operation of operations) {
        switch (operation) {
            case "chop":
                number/=2
                console.log(number)
                
                break;

            case "dice":
                number = Math.sqrt(number)
                console.log(number)

                
                break;
            case "spice":
                number+=1
                console.log(number)

                
                break;
            case "bake":
                number*=3
                console.log(number)

                
                break;
            case "fillet":
                number*=0.80
                console.log(number.toFixed(1))

                
                break;
            default:
                break;
        }
        
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')