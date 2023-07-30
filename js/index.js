// Get references to the required elements from the HTML
const tasks = document.getElementById("tasks"); // The container for the tasks list
const submit = document.getElementById("button_Submit"); // The "Submit" button

// DELETE function: Handles the removal of a task item
function deleteTaskItem(e) {
  e.preventDefault(); // Prevent default behavior of the click event
  const taskItem = e.target.parentElement; // Get the parent <li> element of the clicked button
  tasks.removeChild(taskItem); // Remove the <li> element from the tasks list
}

// EDIT function: Handles the editing of a task item
function editTaskItem(e) {
  e.preventDefault(); // Prevent default behavior of the click event
  const taskItem = e.target.parentElement; // Get the parent <li> element of the clicked button
  const todo_Details = taskItem.querySelector("span"); // Get the <span> element containing the task details
  const upDatedTasked = prompt("update", todo_Details.textContent); // Prompt the user for a new task content

  if (upDatedTasked !== null) {
    todo_Details.textContent = upDatedTasked; // Update the task content with the new value
  }
}

// Create a "Delete" button for each task item and attach the deleteTaskItem function to its click event
const delete_Button = document.createElement("button");
delete_Button.textContent = "Delete";
delete_Button.addEventListener("click", deleteTaskItem);

// Create an "Edit" button for each task item and attach the editTaskItem function to its click event
const update_Button = document.createElement("button");
update_Button.textContent = "Edit";
update_Button.addEventListener("click", editTaskItem);

// Add a click event listener to the "Submit" button to handle adding new tasks
submit.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default behavior of the click event

  // Get the user input values from the input fields
  const userTask = document.getElementById("todo_Data").value.trim(); // The task description
  const date_Data = document.getElementById("date_Data").value; // The task date
  const time_Data = document.getElementById("time_Data").value; // The task time

  // Create new "Delete" and "Edit" buttons for the new task
  const delete_Button = document.createElement("button");
  delete_Button.textContent = "Delete";
  delete_Button.addEventListener("click", deleteTaskItem);

  const update_Button = document.createElement("button");
  update_Button.textContent = "Edit";
  update_Button.addEventListener("click", editTaskItem);

  // Check if the user has entered a task description (not empty)
  if (userTask !== "") {
    // Create a new <li> element to represent the task item
    const taskItem = document.createElement("li");

    // Create a <span> element to display the task details (description, date, and time)
    const todo_Details = document.createElement("span");
    todo_Details.textContent = `${userTask} ${date_Data} ${time_Data}`;

    // Append the <span> element to the <li> element
    taskItem.appendChild(todo_Details);

    // Append the "Delete" and "Edit" buttons to the <li> element
    taskItem.appendChild(delete_Button);
    taskItem.appendChild(update_Button);

    // Append the <li> element to the tasks list
    tasks.appendChild(taskItem);

    // Clear the input fields after adding the new task
    document.getElementById("todo_Data").value = "";
    document.getElementById("date_Data").value = "";
    document.getElementById("time_Data").value = "";
  }
});
