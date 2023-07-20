// Array of tasks
let tasks = [
  { description: 'wash the dishes', completed: false, index: 1 },
  { description: 'complete the To do list project', completed: true, index: 2 },
  { description: 'Take a break', completed: false, index: 3 },
  { description: 'Make changes', completed: true, index: 4 },
  // Add more tasks as needed
];

// Function to render the tasks with handles for dragging and strikethrough for completed tasks
function renderTasksWithHandles() {
  const tasksContainer = document.getElementById('tasks');

  // Clear previous tasks before re-rendering
  tasksContainer.innerHTML = '';

  // Iterate through the tasks array and create HTML list item elements with handles and checkbox
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');

    const handle = document.createElement('span');
    handle.classList.add('handle');
    handle.innerHTML = '<i class="fa-solid fa-grab"></i>';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    const description = document.createElement('span');
    description.textContent = task.description;
    description.style.textDecoration = task.completed ? 'line-through' : 'none'; // Apply strikethrough style for completed tasks

    listItem.appendChild(handle);
    listItem.appendChild(checkbox);
    listItem.appendChild(description);

    // Add event listener to the checkbox to toggle strikethrough on the task description
    checkbox.addEventListener('change', (event) => {
      description.style.textDecoration = event.target.checked ? 'line-through' : 'none';
      // Update the 'completed' property in the tasks array based on checkbox state
      task.completed = event.target.checked;
    });

    tasksContainer.appendChild(listItem);
  });
}

// Function to make tasks draggable
function makeTasksDraggable() {
  const handles = document.querySelectorAll('.handle');

  handles.forEach((handle) => {
    handle.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.parentNode.id);
    });

    handle.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    handle.addEventListener('drop', (event) => {
      event.preventDefault();
      const sourceId = event.dataTransfer.getData('text/plain');
      const sourceElement = document.getElementById(sourceId);
      const targetElement = event.target.closest('.task');

      if (sourceElement !== targetElement) {
        const tasksContainer = document.getElementById('tasks');
        tasksContainer.insertBefore(sourceElement, targetElement);
      }
    });
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length + 1, // Assign a unique index for the new task
    };

    tasks.push(newTask);
    renderTasksWithHandles(); // Render tasks with handles, including the new task
    makeTasksDraggable();

    // Clear the input field after adding the task
    taskInput.value = '';
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  // Filter out the completed tasks from the array
  tasks = tasks.filter((task) => !task.completed);

  // Re-render the tasks list without the completed tasks
  renderTasksWithHandles();
  makeTasksDraggable();
}

// Add event listener to the submit button
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission (which would reload the page)
  addTask();
});

// Add event listener to the form to submit the task when pressing 'Enter'
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission (which would reload the page)
  addTask();
});

// Add event listener to the "Clear all completed" button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCompletedTasks);

// Function to reload the page
function reloadPage() {
  window.location.reload();
}

// Add event listener to the reload button
const reloadButton = document.querySelector('.reload');
reloadButton.addEventListener('click', reloadPage);

// Execute the renderTasksWithHandles and makeTasksDraggable functions on page load
window.addEventListener('DOMContentLoaded', () => {
  renderTasksWithHandles();
  makeTasksDraggable();
});
