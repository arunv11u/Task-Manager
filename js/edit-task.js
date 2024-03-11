import { Task } from "./task.js";

$(() => {
	$("#delete-task").on("click", () => {
		$("#modal").css("display", "flex");
	});

	$("#modal-cancel-task-deletion").on("click", () => $("#modal").css("display", "none"));

	let url = window.location.search;
	let id = url.slice(-1);
	$("#modal-delete-task").on("click", () => {
		const task = new Task;
		task.delete(id);
		location.href = "./index.html";
	});
});