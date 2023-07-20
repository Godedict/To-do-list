(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFLElBQUksMkVBQTJFO0FBQy9FLElBQUkseURBQXlEO0FBQzdELElBQUksd0RBQXdEO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUZBQWlGOztBQUVqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXJyYXkgb2YgdGFza3NcbmxldCB0YXNrcyA9IFtcbiAgeyBkZXNjcmlwdGlvbjogJ3dhc2ggdGhlIGRpc2hlcycsIGNvbXBsZXRlZDogZmFsc2UsIGluZGV4OiAxIH0sXG4gIHsgZGVzY3JpcHRpb246ICdjb21wbGV0ZSB0aGUgVG8gZG8gbGlzdCBwcm9qZWN0JywgY29tcGxldGVkOiB0cnVlLCBpbmRleDogMiB9LFxuICB7IGRlc2NyaXB0aW9uOiAnVGFrZSBhIGJyZWFrJywgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IDMgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ01ha2UgY2hhbmdlcycsIGNvbXBsZXRlZDogdHJ1ZSwgaW5kZXg6IDQgfSxcbiAgLy8gQWRkIG1vcmUgdGFza3MgYXMgbmVlZGVkXG5dO1xuXG4vLyBGdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhc2tzIHdpdGggaGFuZGxlcyBmb3IgZHJhZ2dpbmcgYW5kIHN0cmlrZXRocm91Z2ggZm9yIGNvbXBsZXRlZCB0YXNrc1xuZnVuY3Rpb24gcmVuZGVyVGFza3NXaXRoSGFuZGxlcygpIHtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcblxuICAvLyBDbGVhciBwcmV2aW91cyB0YXNrcyBiZWZvcmUgcmUtcmVuZGVyaW5nXG4gIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgdGFza3MgYXJyYXkgYW5kIGNyZWF0ZSBIVE1MIGxpc3QgaXRlbSBlbGVtZW50cyB3aXRoIGhhbmRsZXMgYW5kIGNoZWNrYm94XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgY29uc3QgaGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhhbmRsZS5jbGFzc0xpc3QuYWRkKCdoYW5kbGUnKTtcbiAgICBoYW5kbGUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZ3JhYlwiPjwvaT4nO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRhc2suY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZSc7IC8vIEFwcGx5IHN0cmlrZXRocm91Z2ggc3R5bGUgZm9yIGNvbXBsZXRlZCB0YXNrc1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaGFuZGxlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjaGVja2JveCB0byB0b2dnbGUgc3RyaWtldGhyb3VnaCBvbiB0aGUgdGFzayBkZXNjcmlwdGlvblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBldmVudC50YXJnZXQuY2hlY2tlZCA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnO1xuICAgICAgLy8gVXBkYXRlIHRoZSAnY29tcGxldGVkJyBwcm9wZXJ0eSBpbiB0aGUgdGFza3MgYXJyYXkgYmFzZWQgb24gY2hlY2tib3ggc3RhdGVcbiAgICAgIHRhc2suY29tcGxldGVkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgfSk7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBtYWtlIHRhc2tzIGRyYWdnYWJsZVxuZnVuY3Rpb24gbWFrZVRhc2tzRHJhZ2dhYmxlKCkge1xuICBjb25zdCBoYW5kbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbmRsZScpO1xuXG4gIGhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlKSA9PiB7XG4gICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgfSk7XG5cbiAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHNvdXJjZUlkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICAgIGNvbnN0IHNvdXJjZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzb3VyY2VJZCk7XG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG5cbiAgICAgIGlmIChzb3VyY2VFbGVtZW50ICE9PSB0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmluc2VydEJlZm9yZShzb3VyY2VFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyB0YXNrXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lucHV0Jyk7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgaWYgKHRhc2tEZXNjcmlwdGlvbiAhPT0gJycpIHtcbiAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSwgLy8gQXNzaWduIGEgdW5pcXVlIGluZGV4IGZvciB0aGUgbmV3IHRhc2tcbiAgICB9O1xuXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICByZW5kZXJUYXNrc1dpdGhIYW5kbGVzKCk7IC8vIFJlbmRlciB0YXNrcyB3aXRoIGhhbmRsZXMsIGluY2x1ZGluZyB0aGUgbmV3IHRhc2tcbiAgICBtYWtlVGFza3NEcmFnZ2FibGUoKTtcblxuICAgIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBhZGRpbmcgdGhlIHRhc2tcbiAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjbGVhciBhbGwgY29tcGxldGVkIHRhc2tzXG5mdW5jdGlvbiBjbGVhckNvbXBsZXRlZFRhc2tzKCkge1xuICAvLyBGaWx0ZXIgb3V0IHRoZSBjb21wbGV0ZWQgdGFza3MgZnJvbSB0aGUgYXJyYXlcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG5cbiAgLy8gUmUtcmVuZGVyIHRoZSB0YXNrcyBsaXN0IHdpdGhvdXQgdGhlIGNvbXBsZXRlZCB0YXNrc1xuICByZW5kZXJUYXNrc1dpdGhIYW5kbGVzKCk7XG4gIG1ha2VUYXNrc0RyYWdnYWJsZSgpO1xufVxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b25cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbiAod2hpY2ggd291bGQgcmVsb2FkIHRoZSBwYWdlKVxuICBhZGRUYXNrKCk7XG59KTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBmb3JtIHRvIHN1Ym1pdCB0aGUgdGFzayB3aGVuIHByZXNzaW5nICdFbnRlcidcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb24gKHdoaWNoIHdvdWxkIHJlbG9hZCB0aGUgcGFnZSlcbiAgYWRkVGFzaygpO1xufSk7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgXCJDbGVhciBhbGwgY29tcGxldGVkXCIgYnV0dG9uXG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckNvbXBsZXRlZFRhc2tzKTtcblxuLy8gRnVuY3Rpb24gdG8gcmVsb2FkIHRoZSBwYWdlXG5mdW5jdGlvbiByZWxvYWRQYWdlKCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgcmVsb2FkIGJ1dHRvblxuY29uc3QgcmVsb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbG9hZCcpO1xucmVsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVsb2FkUGFnZSk7XG5cbi8vIEV4ZWN1dGUgdGhlIHJlbmRlclRhc2tzV2l0aEhhbmRsZXMgYW5kIG1ha2VUYXNrc0RyYWdnYWJsZSBmdW5jdGlvbnMgb24gcGFnZSBsb2FkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgcmVuZGVyVGFza3NXaXRoSGFuZGxlcygpO1xuICBtYWtlVGFza3NEcmFnZ2FibGUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9