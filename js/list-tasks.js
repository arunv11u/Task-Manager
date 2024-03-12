// Importing Task class from task.js
import { Task } from "./task.js";

// jQuery document ready function
$(() => {

    // Event listener for clicking the "Add Task" button to navigate to add-task.html
    $("#add-task").on("click", () => location.href = "./add-task.html");

    // Retrieving all tasks
    const tasks = Task.getAll();

    // If tasks exist, display the tasks list, otherwise show a message
    if (tasks.length) {
        $("#no-tasks").css("display", "none");
        $("#no-filtered-tasks").css("display", "none");
        $("#tasks-list").css("display", "block");
    }

    // Loop through each task and display them in the tasks table
    tasks.forEach(task => {
        let description = task.description;
        if (description.length) description = `${task.description.substring(0, 30)}...`;

        let priorityStyle = "";
        if (task.priority === "LOW") priorityStyle = "task--low-priority";
        else if (task.priority === "MEDIUM") priorityStyle = "task--medium-priority";
        else priorityStyle = "task--high-priority";

        // Appending each task as a row in the tasks table
        $("#tasks").append(`<tr class="task-card__task" onclick="editTask(${task.id})">
        <td class="task-card__task-item">${task.name}</td>
        <td class="task-card__task-item">${description}</td>
        <td class="task-card__task-item ${priorityStyle}">${task.priority}</td>
        <td class="task-card__task-item">${task.accountable}</td>
        <td class="task-card__task-item">${task.responsible}</td>
    </tr>`);
    });

    // Event listener for clicking the "Search" button
    $("#search-task").on("click", () => {
        const searchTextInput = $("#search-task-input").val();

        // Retrieving all tasks again
        const tasks = Task.getAll();

        // Creating a regular expression for searching tasks
        const regexSearchTask = new RegExp("^" + searchTextInput, "i");
        const filteredTasks = tasks.filter(task => {
            // Filtering tasks based on search input
            if (
                regexSearchTask.test(task.name) ||
                regexSearchTask.test(task.description) ||
                regexSearchTask.test(task.priority) ||
                regexSearchTask.test(task.accountable) ||
                regexSearchTask.test(task.responsible)
            ) return task;
        });

        // Handling display based on filtered tasks
        if (filteredTasks.length) {
            $("#no-filtered-tasks").css("display", "none");
            $("#tasks").css("display", "table");

            $("#tasks").html(`<tr class="task-card__headers">
            <th class="task-card__task-header">Name</th>
            <th class="task-card__task-header">Description</th>
            <th class="task-card__task-header">Priority</th>
            <th class="task-card__task-header">Accountable</th>
            <th class="task-card__task-header">Assigned To</th>
        </tr>`);
        } else {
            $("#no-filtered-tasks").css("display", "flex");
            $("#tasks").css("display", "none");
        };

        // Loop through each filtered task and display them in the tasks table
        filteredTasks.forEach(task => {
            let description = task.description;
            if (description.length) description = `${task.description.substring(0, 30)}...`;

            let priorityStyle = "";
            if (task.priority === "LOW") priorityStyle = "task--low-priority";
            else if (task.priority === "MEDIUM") priorityStyle = "task--medium-priority";
            else priorityStyle = "task--high-priority";

            // Appending each filtered task as a row in the tasks table
            $("#tasks").append(`<tr class="task-card__task" onclick="editTask(${task.id})">
            <td class="task-card__task-item">${task.name}</td>
            <td class="task-card__task-item">${description}</td>
            <td class="task-card__task-item ${priorityStyle}">${task.priority}</td>
            <td class="task-card__task-item">${task.accountable}</td>
            <td class="task-card__task-item">${task.responsible}</td>
        </tr>`);
        });
    });
});

// Function to navigate to edit-task.html with task id as parameter
window.editTask = (id) => {
    location.href = `./edit-task.html?id=${id}`;
}