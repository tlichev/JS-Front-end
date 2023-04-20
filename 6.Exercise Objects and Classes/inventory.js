function inventoryOfHeros(herosInfo){
    let heros = [];

    herosInfo.forEach(hero => {
        let [name, level, inventory] = hero.split(" / ")
        addHero(name, level, inventory)
    });

    function addHero(name, level, inventory){
        heros.push({name, level, inventory})
    }


    let sortedHeros = heros.sort((aNum, bNum) => {
        return aNum.level - bNum.level
    })

    sortedHeros.forEach(h => {
        console.log(`Hero: ${h.name}\nlevel => ${h.level}\nitems => ${h.inventory}`)
    });


}


// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}


inventoryOfHeros([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )