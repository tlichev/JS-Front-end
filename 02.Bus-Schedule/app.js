function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/"
    let stopId = "depot"
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const message = document.querySelector("#info > span");
    let nameOfStop = ""
    


    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json()).
        then((info) => {
        let {next, name} = info;
        console.log(next);
        console.log(name);
        stopId = next;
        nameOfStop = name;
        console.log(info)
        message.textContent = `Next stop ${nameOfStop}`;

        

        });
        
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        message.textContent = `Arriving at ${nameOfStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();