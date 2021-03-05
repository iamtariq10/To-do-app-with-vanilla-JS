let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('toDoBtn');
let toDoContainer = document.getElementById('toDoContainer');


addBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})