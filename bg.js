const body = document.querySelector("body"); 

const IMG_NUMBER = 3;

function genRanNum() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function loadImageTrick(){
    console.log("finished loading")
}

function paintImg(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgimage");
    body.appendChild(image)
    // image.addEventListener('loadend', loadImageTrick) //for api


}


function init(){
    const randomNumber = genRanNum();
    paintImg(randomNumber);
}

init();
