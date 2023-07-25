// taskFunctions.js

// Function to update task indexes
function updateIndexes(tasks) {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask(taskDescription, tasks) {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  updateIndexes(tasks);
  saveTasksToLocalStorage(tasks); // Pass the tasks array as an argument
}

// Function to delete a task
function deleteTask(index, tasks) {
  tasks.splice(index - 1, 1);
  updateIndexes(tasks);
  saveTasksToLocalStorage(tasks); // Pass the tasks array as an argument
}

// Function to edit task descriptions
function editTaskDescription(index, newDescription, tasks) {
  tasks[index - 1].description = newDescription;
  saveTasksToLocalStorage(tasks); // Pass the tasks array as an argument
}

export {
  addTask, deleteTask, editTaskDescription, saveTasksToLocalStorage,
};
