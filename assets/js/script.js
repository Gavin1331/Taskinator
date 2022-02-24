var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// when button is clicked fuction is called to create new task-item
var createTaskHandler = function(event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}

// on form click create task handler
formEl.addEventListener("submit", createTaskHandler);



// Lesson