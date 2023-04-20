function town(townData){
    townData.forEach(data => {
        let townObj = {};
        let [town , latitude, longitude] = data.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        townObj = {town, latitude, longitude};
        console.log(townObj);

    });
}

town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)