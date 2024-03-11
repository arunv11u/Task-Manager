import { Task } from "./task.js";

$(() => {

	$("#add-task").on("click", () => location.href = "./add-task.html");

	const tasks = Task.getAll();

	if (tasks.length) {
		$("#no-tasks").css("display", "none");
		$("#tasks-list").css("display", "block");
	}

	tasks.forEach(task => {
		let description = task.description;
		if (description.length) description = `${task.description.substring(0, 30)}...`;

		let priorityStyle = "";
		if (task.priority === "LOW") priorityStyle = "task--low-priority";
		else if (task.priority === "MEDIUM") priorityStyle = "task--medium-priority";
		else priorityStyle = "task--high-priority";

		$("#tasks").append(`<tr class="task-card__task" onclick="editTask(${task.id})">
		<td class="task-card__task-item">${task.name}</td>
		<td class="task-card__task-item">${description}</td>
		<td class="task-card__task-item ${priorityStyle}">${task.priority}</td>
		<td class="task-card__task-item">${task.accountable}</td>
		<td class="task-card__task-item">${task.responsible}</td>
	</tr>`);
	});
});

window.editTask = (id) => {
	location.href = `./edit-task.html?id=${id}`;
}