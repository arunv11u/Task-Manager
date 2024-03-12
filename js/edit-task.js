import {
	Task,
	validateTaskName,
	validateTaskDescription,
	validateTaskPriority,
	validateTaskAccountable,
	validateTaskResponsible,
} from "./task.js";


$(() => {
	let url = window.location.search;
	let id = parseInt(url.slice(-1));
	const task = Task.get(id);

	$("#name").val(task.name);
	$("#description").val(task.description);
	$("#priority").val(task.priority);
	$("#accountable").val(task.accountable);
	$("#responsible").val(task.responsible);

	$("#name").on("input", () => {
		try {
			validateTaskName($("#name").val());

			$("#name-error").css("display", "none").text("");
		} catch (error) {
			$("#name-error").css("display", "block").text(error.message);
		}
	});

	$("#description").on("input", () => {
		try {
			validateTaskDescription($("#description").val());

			$("#description-error").css("display", "none").text("");
		} catch (error) {
			$("#description-error").css("display", "block").text(error.message);
		}
	});

	$("#priority").on("input", () => {
		try {
			validateTaskPriority($("#priority").val());

			$("#priority-error").css("display", "none").text("");
		} catch (error) {
			$("#priority-error").css("display", "block").text(error.message);
		}
	});

	$("#accountable").on("input", () => {
		try {
			validateTaskAccountable($("#accountable").val());

			$("#accountable-error").css("display", "none").text("");
		} catch (error) {
			$("#accountable-error").css("display", "block").text(error.message);
		}
	});

	$("#responsible").on("input", () => {
		try {
			validateTaskResponsible($("#responsible").val());

			$("#responsible-error").css("display", "none").text("");
		} catch (error) {
			$("#responsible-error").css("display", "block").text(error.message);
		}
	});

	$("#update-task").on("click", function () {
		const name = $("#name").val();
		const description = $("#description").val();
		const priority = $("#priority").val();
		const accountable = $("#accountable").val();
		const responsible = $("#responsible").val();

		const task = new Task(
			name,
			description,
			priority,
			accountable,
			responsible
		);

		let isInvalidAddTaskForm = false;
		try {
			validateTaskName(name);

			$("#name-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;

			$("#name-error").css("display", "block").text(error.message);
		}

		try {
			validateTaskDescription(description);

			$("#description-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;

			$("#description-error").css("display", "block").text(error.message);
		}

		try {
			validateTaskPriority(priority);

			$("#priority-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;

			$("#priority-error").css("display", "block").text(error.message);
		}

		try {
			validateTaskAccountable(accountable);

			$("#accountable-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;

			$("#accountable-error").css("display", "block").text(error.message);
		}

		try {
			validateTaskResponsible(responsible);

			$("#responsible-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;

			$("#responsible-error").css("display", "block").text(error.message);
		}

		if (isInvalidAddTaskForm) return;

		task.update(id);
		location.href = "../index.html";
	});

	$("#back-to-home-page").on("click", () => {
		location.href = `./index.html`;
	});
});
