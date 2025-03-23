const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
    if(inputBox.value ===''){
        alert("You must write your task in input box");
    }
    else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();