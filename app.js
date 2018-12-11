function onReady() {
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')
  const deleteToDo = document.getElementById('deleteToDo')


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the newToDoText
    let title = newToDoText.value;


    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input')




    //delete button
    let deleteToDo = document.createElement('button')

    deleteToDo.textContent = "Delete";
    deleteToDo.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //attach delete button to item
    newLi.appendChild(deleteToDo)

    //empty the input
    newToDoText.value = '';

    deleteToDo.addEventListener('click', function(event) {
      toDoList.removeChild(this.parentElement);
    })


  });



}

window.onload = function() {
  onReady();
}
