const taskForm = document.querySelector('.taskForm')
const toDolist = document.querySelector('.todos');
const toDoInput = document.querySelector('#toDo');

const createTask = (Task) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = Task;
  button.innerText = "👌"
  toDolist.appendChild(li);

  button.addEventListener("click", deleteTask);
};

const deleteTask = (event) => {
    const li = event.target.parentElement;
    li.remove();
}

const submitTask = (event) => {
    event.preventDefault()
    createTask(toDoInput.value)
}

taskForm.addEventListener('submit', submitTask);
