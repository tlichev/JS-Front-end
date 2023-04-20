function city({name, area, population, country, postCode}){
    cityObj = {name, area, population,country,postCode};
    for (const [key, value] of Object.entries(cityObj)) {
        console.log(`${key}: ${value}`);
      }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)