// index.js

import './style.css';
import { renderTasksWithHandles, makeTasksAndHandleDraggable } from './module/domManipulation.js';
import tasks from './module/tasks.js';
import { deleteTask, editTaskDescription, addTask } from './module/taskManager.js';

// Function to clear all completed tasks
function clearCompletedTasks() {
  // Filter out the completed tasks from the array
  const updatedTasks = tasks.filter((task) => !task.completed);

  // Re-render the tasks list without the completed tasks
  renderTasksWithHandles(updatedTasks, deleteTask); // Pass the deleteTask function as a callback
  makeTasksAndHandleDraggable();
}

// Add event listener to the submit button and form to add a new task
const submitButton = document.querySelector('.submit');
const form = document.getElementById('form');

function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent form submission (which would reload the page)
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    addTask(taskDescription);
    // Clear the input field after adding the task
    taskInput.value = '';
  }
}

submitButton.addEventListener('click', handleTaskSubmission);
form.addEventListener('submit', handleTaskSubmission);

// Add event listener to the "Clear all completed" button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  clearCompletedTasks();
});

// Event listener for deleting a task and editing a task description
const tasksContainer = document.getElementById('tasks');
tasksContainer.addEventListener('click', (event) => {
  const targetClassList = event.target.classList;

  if (targetClassList.contains('fa-trash')) {
    const taskElement = event.target.closest('.task');
    const taskId = parseInt(taskElement.id.replace('task-', ''), 10); // Get the taskId
    deleteTask(taskId);
  } else if (targetClassList.contains('description')) {
    const taskElement = event.target.closest('.task');
    const index = parseInt(taskElement.id.replace('task-', ''), 10);
    const descriptionElement = taskElement.querySelector('.description');

    // Enable editing by setting contentEditable attribute
    descriptionElement.contentEditable = true;
    descriptionElement.focus();

    // Handle user input for editing the task
    descriptionElement.addEventListener('blur', () => {
      const newDescription = descriptionElement.textContent.trim();
      if (newDescription !== '') {
        editTaskDescription(index, newDescription);
      } else {
        // If the edited description is empty, reset it to the previous value
        descriptionElement.textContent = tasks[index - 1].description;
      }

      // Disable editing after the user finishes editing
      descriptionElement.contentEditable = false;
    });

    // Handle Enter key press to save changes
    descriptionElement.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        descriptionElement.blur();
      }
    });
  }
});

// Function to reload the page
function reloadPage() {
  window.location.reload();
}

// Add event listener to the reload button
const reloadButton = document.querySelector('.reload');
reloadButton.addEventListener('click', reloadPage);

// Execute the renderTasksWithHandles and makeTasksAndHandleDraggable functions on page load
window.addEventListener('DOMContentLoaded', () => {
  renderTasksWithHandles(tasks, deleteTask);
  makeTasksAndHandleDraggable();
});
