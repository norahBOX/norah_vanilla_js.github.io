

const COORDS = "coords"


// function saveCoords(coordsObj) {
//     localStorage.setItem(COORDS, JSON.stringify(coordsObj));
// }

function handleGeoSuccess(position) {
    console.log(position)
    // const latiitude = position.coords.latiitude
    // const longitude = position.coords.longitude
    // const coordsObj = {
    //     latiitude: latiitude, 
    //     longitude: longitude
    // }
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
    console.log(loadedCoords)
    console.log("sibal")
    if (loadedCoords === null ||  loadedCoords === 'undefined') {
        askForCoords();
    } else {
        //getWeather
        console.log(loadedCoords)
    }
}

function init() {
    loadCoords;
}

init();