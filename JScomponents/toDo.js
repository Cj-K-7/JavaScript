const taskForm = document.querySelector('.taskForm')
const toDolist = document.querySelector('.todos');
const toDoInput = document.querySelector('#toDo');

const TasksKey = "toDos";
let taskArray = [];

const saveTask = () => {
  localStorage.setItem(TasksKey, JSON.stringify(taskArray));
}

const createTask = (Task) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = Task.id
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = Task.text;
  button.innerText = "👌";
  toDolist.appendChild(li);

  button.addEventListener("click", deleteTask);
};

const deleteTask = (event) => {
    const li = event.target.parentElement;
    li.remove();
    taskArray = taskArray.filter((task)=> task.id !== parseInt(li.id));
    saveTask();
}

const submitTask = (event) => {
    event.preventDefault();
    const newTask = toDoInput.value;
    const newTaskObj = {
      text : newTask,
      id : Date.now(),
    };
    taskArray.push(newTaskObj);
    createTask(newTaskObj);
    saveTask();
}

taskForm.addEventListener('submit', submitTask);

const savedTask = localStorage.getItem(TasksKey);

if( savedTask !== null ){
  const parsed =JSON.parse(savedTask);
  taskArray = parsed;
  console.log(parsed);
  parsed.forEach(createTask);
}