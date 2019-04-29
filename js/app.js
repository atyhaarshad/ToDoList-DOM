document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})


const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const taskListItem = createTaskListItem(event.target);
  const taskList = document.querySelector('#task-list');
  taskList.appendChild(taskListItem);

  event.target.reset();
}

const createTaskListItem = function (form) {
  const taskListItem = document.createElement('li');
  taskListItem.classList.add('task-list-item');

  const task = document.createElement('h2');
  task.textContent = form.task.value;
  taskListItem.appendChild(task);

  const desc = document.createElement('p');
  desc.textContent = form.desc.value;
  taskListItem.appendChild(desc);

  const priority = document.createElement('h3');
  priority.textContent = form.priority.value;
  taskListItem.appendChild(priority);

  const xDel = document.createElement("button");
  xDel.textContent = "X"
  taskListItem.appendChild(xDel);

	// taskListItem.addEventListener("click", () => taskComplete(taskListItem));
  xDel.addEventListener("click", () => deleteListItem(taskListItem));

	taskListItem.addEventListener("click", () => {
    taskListItem.classList.toggle("done");
  });

  return taskListItem;


}

const handleDeleteAllClick = function (event) {
  const taskList = document.querySelector('#task-list');
  taskList.innerHTML = '';
}

function deleteListItem(item){
  document.querySelector('#task-list').removeChild(item)
}

// function taskComplete(item){
//   document.querySelector('#task-list').classList.toggle("done")
// }
