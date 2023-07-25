// taskOperations.js

import tasks from './tasks.js';
import { renderTasksWithHandles, makeTasksAndHandleDraggable } from './domManipulation.js';

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  updateIndexes();
  saveTasksToLocalStorage();
  renderTasksWithHandles(tasks);
  makeTasksAndHandleDraggable();
}

function deleteTask(index) {
  tasks.splice(index - 1, 1);
  updateIndexes();
  saveTasksToLocalStorage();
  renderTasksWithHandles(tasks);
  makeTasksAndHandleDraggable();
}

function editTaskDescription(index, newDescription) {
  tasks[index - 1].description = newDescription;
  saveTasksToLocalStorage();
  renderTasksWithHandles(tasks);
}

export { addTask, deleteTask, editTaskDescription };
