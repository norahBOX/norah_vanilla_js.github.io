

const COORDS = "coords"


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
        //getWeather

    }
}

function init() {
    loadCoords();
}

init();