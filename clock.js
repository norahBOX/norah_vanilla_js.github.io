const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function realTimeClock() {
    const date = new Date()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const fullClock = `${hours < 10 ? `0${hours}` : hours}:${
                        minutes < 10 ? `0${minutes}` : minutes}:${
                        seconds < 10 ? `0${seconds}` : seconds}`;
    clockTitle.innerText = fullClock
}


function init() {
    realTimeClock()
    setInterval(realTimeClock, 1000);
};

init();