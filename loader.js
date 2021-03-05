let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('toDoBtn');
let toDoContainer = document.getElementById('toDoContainer');


addBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
})