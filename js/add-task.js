// Student Name: Fenil Moradiya
// Student Number: 8941920

// Import necessary functions and classes from task.js module
import {
	Task,
	validateTaskName,
	validateTaskDescription,
	validateTaskPriority,
	validateTaskAccountable,
	validateTaskResponsible,
} from "./task.js";

// Function to reset the add task form fields
function resetAddTaskForm() {
	$("#name").val("");
	$("#description").val("");
	$("#priority").val("");
	$("#accountable").val("");
	$("#responsible").val("");
}

// jQuery ready function
$(() => {
	// Event listener for input on task name field
	$("#name").on("input", () => {
		try {
			validateTaskName($("#name").val());
			$("#name-error").css("display", "none");
		} catch (error) {
			$("#name-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for input on task description field
	$("#description").on("input", () => {
		try {
			validateTaskDescription($("#description").val());
			$("#description-error").css("display", "none").text("");
		} catch (error) {
			$("#description-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for input on task priority field
	$("#priority").on("input", () => {
		try {
			validateTaskPriority($("#priority").val());
			$("#priority-error").css("display", "none").text("");
		} catch (error) {
			$("#priority-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for input on task accountable field
	$("#accountable").on("input", () => {
		try {
			validateTaskAccountable($("#accountable").val());
			$("#accountable-error").css("display", "none").text("");
		} catch (error) {
			$("#accountable-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for input on task responsible field
	$("#responsible").on("input", () => {
		try {
			validateTaskResponsible($("#responsible").val());
			$("#responsible-error").css("display", "none").text("");
		} catch (error) {
			$("#responsible-error").css("display", "block").text(error.message);
		}
	});

	// Event listener for clicking on back to home page button
	$("#back-to-home-page").on("click", () => {
		location.href = `./index.html`;
	});

	// Event listener for clicking on create task button
	$("#create-task").on("click", () => {
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

		// Validate task name
		try {
			validateTaskName(name);
			$("#name-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#name-error").css("display", "block").text(error.message);
		}

		// Validate task description
		try {
			validateTaskDescription(description);
			$("#description-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#description-error").css("display", "block").text(error.message);
		}

		// Validate task priority
		try {
			validateTaskPriority(priority);
			$("#priority-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#priority-error").css("display", "block").text(error.message);
		}

		// Validate task accountable
		try {
			validateTaskAccountable(accountable);
			$("#accountable-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#accountable-error").css("display", "block").text(error.message);
		}

		// Validate task responsible
		try {
			validateTaskResponsible(responsible);
			$("#responsible-error").css("display", "none").text("");
		} catch (error) {
			isInvalidAddTaskForm = true;
			$("#responsible-error").css("display", "block").text(error.message);
		}

		// If any form validation fails, return without creating task
		if (isInvalidAddTaskForm) return;

		// Create the task
		task.create();
		$("#task_added_msg")
			.html(`<div class="alert-msg"><p>task added successfully!</p>
			<a href="./index.html">show added task </a></div>`)

		setInterval(() => { $("#task_added_msg").hide() }, 1000);

		// Reset the add task form fields
		resetAddTaskForm();
	});
});
