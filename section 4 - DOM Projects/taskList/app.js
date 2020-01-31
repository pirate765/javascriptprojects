//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all Event Listeners
loadEventListeners();


//Trigger all event listeners
function loadEventListeners() {
  //Add Task Event
  form.addEventListener('submit', addTask);  
  //Remove Task
  taskList.addEventListener('click', removeTask);
  //clear Tasks
  clearBtn.addEventListener('click', clearTasks);
  //Filter Tasks
  filter.addEventListener('keyup', filterTasks);
  //DOM onload Event
  document.addEventListener('DOMContentLoaded', getTasks);
}

//Add Task
function addTask(e) {
  //Check if the input is blank to pervent blank entry  
  if(taskInput.value === '') {
    alert('Add Task');
  }

  //Create li Element on Input
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Add our input to the text node
  li.appendChild(document.createTextNode(taskInput.value));

  //Create our remove link
  const link = document.createElement('a');
  //Add class to the link
  link.className = 'delete-item secondary-content';
 //Add icon to the link
  link.innerHTML = '<i class= "fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);  

  //Add Task li to ul
  taskList.appendChild(li);

  //Store in local storage
   storeTaskInLocalStorage(taskInput.value);

  //Clear our input
  taskInput.value = '';
  e.preventDefault();
}

//Store Task in Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Get tasks from local Storage to ul
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    //Create li Element on Input
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Add our input to the text node
  li.appendChild(document.createTextNode(task));

  //Create our remove link
  const link = document.createElement('a');
  //Add class to the link
  link.className = 'delete-item secondary-content';
 //Add icon to the link
  link.innerHTML = '<i class= "fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);  

  //Add Task li to ul
  taskList.appendChild(li);

  });
}


//Remove Task
function removeTask(e){
  // if(e.target.className === 'fa fa-remove'){
  //   e.target.parentElement.parentElement.remove();
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){  
      e.target.parentElement.parentElement.remove();
    }
  }
  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
}

//Remove Task from local Storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  //Function call to clear Task from LStorage
  clearTaskFromLocalStorage();
}

//Remove Tasks from local Storage
function clearTaskFromLocalStorage(){
  localStorage.clear();
}


//Filter Tasks
function filterTasks(e){
  const searchString = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
   const item = task.firstChild.textContent;
   if(item.toLowerCase().indexOf(searchString)!== -1){
     task.style.display = 'block';
   } else {
     task.style.display = 'none';
   }
 });
}