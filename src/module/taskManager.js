// taskManager.js

import tasks from './tasks.js';

// Function to delete a task
function deleteTask(index) {
  // Filter out the task with the specified index from the tasks array
  const updatedTasks = tasks.filter((task) => task.index !== index);
  // Update the task index for the remaining tasks
  updatedTasks.forEach((task, idx) => {
    task.index = idx + 1;
  });
  // Update the tasks array in the tasks.js module
  tasks.length = 0;
  tasks.push(...updatedTasks);
}

// Function to edit task descriptions
function editTaskDescription(index, newDescription) {
  // Find the task with the specified index in the tasks array
  const taskToEdit = tasks.find((task) => task.index === index);

  // If the task is found, update its description
  if (taskToEdit) {
    taskToEdit.description = newDescription;
  }
}

export { deleteTask, editTaskDescription };
