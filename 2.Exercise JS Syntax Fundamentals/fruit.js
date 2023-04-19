function fruit(type, grams, pricePerKilo){
    let kilo = grams*0.001
    let price = kilo*pricePerKilo
    console.log(`I need $${price.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${type}.`)
}

fruit('orange', 2500, 1.80)