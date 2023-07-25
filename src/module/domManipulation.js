// domManipulation.js

// Function to render the tasks with handles for dragging and strikethrough for completed tasks
function renderTasksWithHandles(tasks, deleteTaskCallback) {
  const tasksContainer = document.getElementById('tasks');

  // Clear previous tasks before re-rendering
  tasksContainer.innerHTML = '';

  // Iterate through the tasks array and create HTML list item elements with handles, checkboxes,
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');
    listItem.id = `task-${task.index}`; // Use the task's index as the ID

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    const description = document.createElement('span');
    description.textContent = task.description;
    description.style.textDecoration = task.completed ? 'line-through' : 'none'; // Apply strikethrough style for completed tasks

    const handle = document.createElement('div');
    handle.classList.add('handle-icon');
    handle.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    // Add delete icon
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(description);
    listItem.appendChild(handle);
    listItem.appendChild(deleteIcon); // Append the delete icon to the list item

    // Add event listener to delete icon
    deleteIcon.addEventListener('click', () => {
      const taskId = parseInt(listItem.id.replace('task-', ''), 10); // Get the taskId
      deleteTaskCallback(taskId); // Call the deleteTaskCallback with the correct taskId
    });

    // Add event listener to checkbox
    checkbox.addEventListener('change', (event) => {
      description.style.textDecoration = event.target.checked ? 'line-through' : 'none';
      // Update the 'completed' property in the tasks array based on checkbox state
      task.completed = event.target.checked;
    });

    tasksContainer.appendChild(listItem);
  });
}

// Function to make tasks and handle draggable
function makeTasksAndHandleDraggable() {
  const tasksAndHandles = document.querySelectorAll('.task, .handle-icon');

  tasksAndHandles.forEach((element) => {
    element.setAttribute('draggable', 'true');

    element.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.id);
    });

    element.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    element.addEventListener('drop', (event) => {
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

// Export the functions as named exports
export { renderTasksWithHandles, makeTasksAndHandleDraggable };
