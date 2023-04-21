function getInfo() {
    const inputStopId = document.getElementById("stopId").value;
    const divStopPlace = document.getElementById("stopName");
    const ulBusesAriives = document.getElementById("buses");
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/"
    ulBusesAriives.innerHTML = "";
    divStopPlace.textContent = "";

    fetch(`${BASE_URL}${inputStopId}`)
        .then((res) => res.json())
        .then((busInfo) => {
            const {name, buses} = busInfo;
            divStopPlace.textContent = name;
            for (const key in buses) {
               
                const li = document.createElement("li")
                li.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
                ulBusesAriives.appendChild(li);

            }

        })
        .catch((err)=>{
            divStopPlace.textContent = "Error";
        })
    
    
}