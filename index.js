// Created a close button and appended it to each list

const myList = document.getElementsByTagName("li");
var i;
for (i =0; i < myList.length; i++){
    const span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

// When close button is clicked for a particular list, it hides
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
}

// Added a checked  mark
const list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


//Create a new list when the plus button is clicked
function newTask() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const newText = document.createTextNode(inputValue);
    li.appendChild(newText);
    if (inputValue === ''){
       const error = document.getElementById('error');
       error.style.display = "block"

       setTimeout(() => error.remove(), 3000)
    } else{
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            const div = this.parentElement;
            div.style.display = "none"
        }
    }

}