import { Task } from "./task.js";

$(() => {
	$("#delete-task").on("click", () => {
		$("#modal").css("display", "flex");
	});

	$("#modal-cancel-task-deletion").on("click", () => $("#modal").css("display", "none"));

	const url = new URL(location.href);
	const searchParams = new URLSearchParams(url.search);
	const id = searchParams.get("id");

	$("#modal-delete-task").on("click", () => {
		const task = new Task;
		task.delete(id);

		location.href = "./index.html";
	});
});