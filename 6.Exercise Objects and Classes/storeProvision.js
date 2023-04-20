function storeProvision(stock, products){
    let storeStock = {};
    for (let index = 0; index < stock.length; index++) {
        if (index%2===0) {
            storeStock[stock[index]]= Number(stock[index+1]);
        } 
    }

    for (let index = 0; index < products.length; index++) {
        if (index%2===0) {
            if(storeStock.hasOwnProperty(products[index])){

            storeStock[products[index]] += Number(products[index+1]);
            }else{
                storeStock[products[index]] = Number(products[index+1]); 
            }
        }
        
    }
    for (const key in storeStock) {
        console.log(`${key} -> ${storeStock[key]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )