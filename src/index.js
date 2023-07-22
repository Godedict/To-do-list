/* eslint-disable no-alert */
// index.js

import './style.css';
import { renderTasksWithHandles, makeTasksAndHandleDraggable } from './module/domManipulation.js';
import tasks from './module/tasks.js';
import { deleteTask, editTaskDescription } from './module/taskManager.js';

// Function to add a new task
function addTask(newTask) {
  tasks.push(newTask);
  renderTasksWithHandles(tasks, deleteTask); // Pass the deleteTask function as a callback
  makeTasksAndHandleDraggable();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  // Filter out the completed tasks from the array
  const updatedTasks = tasks.filter((task) => !task.completed);

  // Re-render the tasks list without the completed tasks
  renderTasksWithHandles(updatedTasks, deleteTask); // Pass the deleteTask function as a callback
  makeTasksAndHandleDraggable();
}

// Add event listener to the submit button
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission (which would reload the page)
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length + 1, // Assign a unique index for the new task
    };
    addTask(newTask);
    // Clear the input field after adding the task
    taskInput.value = '';
  }
});

// Add event listener to the form to submit the task when pressing 'Enter'
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission (which would reload the page)
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length + 1, // Assign a unique index for the new task
    };
    addTask(newTask);
    // Clear the input field after adding the task
    taskInput.value = '';
  }
});

// Add event listener to the "Clear all completed" button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  clearCompletedTasks();
});

// Event listener for deleting a task
const tasksContainer = document.getElementById('tasks');
tasksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const taskElement = event.target.closest('.task');
    const index = parseInt(taskElement.id.replace('task-', ''), 10);
    deleteTask(index); // Use the deleteTask function to remove the task from the tasks array
    renderTasksWithHandles(tasks, deleteTask); // Re-render the tasks after deletion
    makeTasksAndHandleDraggable();
  }
});

// Update the event listener for editing a task description
tasksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('description')) {
    const taskElement = event.target.closest('.task');
    const index = parseInt(taskElement.id.replace('task-', ''), 10);
    const descriptionElement = taskElement.querySelector('.description');

    // Create an input element for editing
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = descriptionElement.textContent;
    inputElement.classList.add('edit-input');

    // Replace the description element with the input element
    taskElement.replaceChild(inputElement, descriptionElement);
    inputElement.focus();

    // Handle user input for editing the task
    inputElement.addEventListener('blur', () => {
      const newDescription = inputElement.value.trim();
      if (newDescription !== '') {
        editTaskDescription(index, newDescription);
        renderTasksWithHandles(tasks, deleteTask); // Re-render the tasks after editing
        makeTasksAndHandleDraggable();
      } else {
        // If the edited description is empty, reset it to the previous value
        inputElement.value = tasks[index - 1].description;
      }
    });

    // Handle Enter key press to save changes
    inputElement.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        inputElement.blur();
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
