function orders(product, quantity){
    let coffee = (quantity) => (quantity*1.50).toFixed(2);
    let water = (quantity) => (quantity*1.00).toFixed(2);
    let snacks = (quantity) => (quantity*2.00).toFixed(2);
    let coke = (quantity) => (quantity*1.40).toFixed(2);
    let productObj= {
        coffee:coffee,
        water:water,
        snacks:snacks,
        coke:coke
    }
    return productObj[product](quantity)

}

console.log(orders("water", 5))