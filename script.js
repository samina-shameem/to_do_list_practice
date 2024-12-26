//dom elements
const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

//array of task objects
let tasks = [
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Complete homework", completed: false },
];

//function to render tasks
function renderTasks() {
    todoList.innerHTML = "";//clear the list
    let index = 0;//start index for iteraction

    do {
        const task = tasks[index];
        const li = document.createElement("li");
        li.innerHTML = `
         <span>${task.name}</span>
         <button onclick="removeTask(${task.id})">Delete</button>
        `;
        todoList.appendChild(li);
        index++;

    } while (index < tasks.length);
    //console.log("hi");
}

//add a new task
function addTask() {
    const taskName = newTaskInput.value.trim();
    if (taskName === "") {
        alert("Task cannot be empty");
        return;
    }

    //create a new task object
    const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
    };
    //console.log("adding task");

    tasks.push(newTask);//add task to the array

    newTaskInput.value ="";//clear i/p

    renderTasks();//re-render the list
    //console.log("testing");
}


//remove a task
function removeTask(taskId){
    tasks=tasks.filter(task =>task.id !== taskId);
    renderTasks();// re-render the list
}

//event listeners
addTaskButton.addEventListener("click", addTask);

//initial render
renderTasks();