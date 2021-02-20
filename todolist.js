const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),  
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDoArray = [];


function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDoArray.filter(function(toDo){
    return toDo.id !== parseInt(li.id)
  });
  console.log(cleanToDos);
  
  toDoArray = cleanToDos;
  saveToDoArray();
}


function saveToDoArray() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoArray));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDoArray.length + 1 

    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);
    toDoObj = {
        text: text,
        id: newId
    }
    toDoArray.push(toDoObj);
    saveToDoArray() 
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);

      parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text);
      })
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();