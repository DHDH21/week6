//set up API

const myAPI ="3a0d5c753ccd6d37ba3034c92a6c5f34";

//creat function

function getWeather(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3a0d5c753ccd6d37ba3034c92a6c5f34")
    .then(
        function(res) {
            console.log(res);
            return res.json();
        })
        .than (function(data){
            const {coord} = data
            const {lon, lat} = coord
        }); 
};
