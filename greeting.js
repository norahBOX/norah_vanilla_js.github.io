const nameForm = document.querySelector(".js-form");
const nameInput = nameForm.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const USER = "currentUser";

function makeGreeting(text) { //유저 이름 보여줌
    nameForm.classList.remove("showing"); //폼을 지우고
    greetings.classList.add("showing");
    greetings.innerText = `Welcome! ${text}`

}

function saveName(text) {
    localStorage.setItem(USER, text)
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = nameInput.value;
    makeGreeting(currentValue);
    saveName(currentValue);
}

function askForName() { //유저 네임 입력
    nameForm.classList.add("showing"); // 일단 입력할 곳을 보여줌
    nameForm.addEventListener("submit", handleSubmit) // 엔터치면 저장 + 보여줌
}



function loadName() {
    const currentUser = localStorage.getItem(USER);
    if (currentUser === null) {
        askForName();
    } else {
        makeGreeting(currentUser) ;
    }
}


function init() {
    loadName();
}

init()