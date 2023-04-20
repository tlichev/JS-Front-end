function moviesRedactor(moviesInfo){
    let movies = [];
    moviesInfo.forEach(info => {
        if (info.includes("addMovie")){
            let movieName = info.split("addMovie ").join("");
            addMovie(movieName);
        }
        if (info.includes("directedBy")) {
            let [name, director] = info.split(" directedBy ");
            addDirector(name, director);
        }
        if (info.includes("onDate")) {
            let [name, date] = info.split(" onDate ");
            addDate(name, date);
        }
    });

    function addMovie(name){
        movies.push({name});
    }

    function addDirector(name, director){
        let movie = movies.find((m) => m.name ===name);
        if (movie) {
            movie.director = director;
            
        }
    }

    function addDate(name, date){
        let movie = movies.find((m) => m.name ===name);
        if (movie) {
            movie.date = date;
            
        }
    }

    movies.forEach(obj => {
        if (obj.hasOwnProperty("name")&&obj.hasOwnProperty("director")&&obj.hasOwnProperty("date")) {
            console.log(JSON.stringify(obj));
        }
        
    });
}

moviesRedactor([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    
    )