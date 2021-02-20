const weatherContainer = document.querySelector(".js-weather")

const API_KEY = "da797ee256deff30800f8cf1c93cbad0";
const COORDS = "coords"

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
        }).then(function(json){
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weatherContainer.innerText = `${place} temperature is ${temperature}'c!`
        });
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.log(position)
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude: latitude, 
        longitude: longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log("failed to get location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null || loadedCoords === 'undefined') {
        askForCoords();
    } else {
        parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)

    }
}

function init() {
    loadCoords();
}

init();