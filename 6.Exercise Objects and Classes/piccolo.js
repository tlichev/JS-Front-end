function carTrarcer(carsAsArr){

    let cars=[];
    carsAsArr.forEach(info => {
        let[command, number] = info.split(", ");
        if (command === "IN") {
            addCar(number);
        }
        if (command === "OUT") {
            removeCar(number)
        }
    });

    function addCar(num){
        if (!cars.includes(num)) {
            cars.push(num);
        }
    }
    function  removeCar(num){
        if (cars.includes(num)) {
            let index = cars.indexOf(num);
            cars.splice(index,1)

        }
    }
let sortedCars = cars.sort((a,b) => {
    return a.localeCompare(b)

});
    


    sortedCars.forEach(element => {
        console.log(element)
    });
}




// let arr = [1,2,3]
// let index = arr.indexOf(2);
// let a = arr.splice(index,1)
// console.log(arr)


carTrarcer(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)