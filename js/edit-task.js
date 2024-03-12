// Student Name: James Boby Vempala
// Student Number: 8941304

// Import necessary modules and functions from task.js file
import {
	Task,
	validateTaskName,
	validateTaskDescription,
	validateTaskPriority,
	validateTaskAccountable,
	validateTaskResponsible,
} from "./task.js";

// When the document is ready
$(() => {
	// Extracting task ID from URL query parameter
	let url = window.location.search;
	let id = parseInt(url.slice(-1));

	// Retrieve task details by ID
	const task = Task.get(id);

	// Populate form fields with task details
	$("#name").val(task.name);
	$("#description").val(task.description);
	$("#priority").val(task.priority);
	$("#accountable").val(task.accountable);
	$("#responsible").val(task.responsible);

	// Event listener for name input field
	$("#name").on("input", () => {
		try {
			validateTaskName($("#name").val());
			$("#name-error").css("display", "none").text("");
		} catch (error) {
			$("#name-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for description input field
	$("#description").on("input", () => {
		try {
			validateTaskDescription($("#description").val());
			$("#description-error").css("display", "none").text("");
		} catch (error) {
			$("#description-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for priority input field
	$("#priority").on("input", () => {
		try {
			validateTaskPriority($("#priority").val());
			$("#priority-error").css("display", "none").text("");
		} catch (error) {
			$("#priority-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for accountable input field
	$("#accountable").on("input", () => {
		try {
			validateTaskAccountable($("#accountable").val());
			$("#accountable-error").css("display", "none").text("");
		} catch (error) {
			$("#accountable-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for responsible input field
	$("#responsible").on("input", () => {
		try {
			validateTaskResponsible($("#responsible").val());
			$("#responsible-error").css("display", "none").text("");
		} catch (error) {
			$("#responsible-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for update task button
	$("#update-task").on("click", function () {
		const name = $("#name").val();
		const description = $("#description").val();
		const priority = $("#priority").val();
		const accountable = $("#accountable").val();
		const responsible = $("#responsible").val();

		// Create new task object with updated details
		const task = new Task(name, description, priority, accountable, responsible);

		// Variable to track if there are any validation errors
		let isInvalidAddTaskForm = false;

		// Validate name field
		try {
			validateTaskName(name);
			$("#name-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#name-error").css("display", "block").text(error.message);
		}

		// Validate description field
		try {
			validateTaskDescription(description);
			$("#description-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#description-error").css("display", "block").text(error.message);
		}

		// Validate priority field
		try {
			validateTaskPriority(priority);
			$("#priority-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#priority-error").css("display", "block").text(error.message);
		}

		// Validate accountable field
		try {
			validateTaskAccountable(accountable);
			$("#accountable-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#accountable-error").css("display", "block").text(error.message);
		}

		// Validate responsible field
		try {
			validateTaskResponsible(responsible);
			$("#responsible-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#responsible-error").css("display", "block").text(error.message);
		}

		// If there are any validation errors, return
		if (isInvalidAddTaskForm) return;

		// Update task and redirect to index page
		task.update(id);
		location.href = "../index.html";
	});

	// Event listener for back to home page button
	$("#back-to-home-page").on("click", () => {
		location.href = `./index.html`;
	});
});