// Student Name: Arun Varadharajalu
// Student Number: 8896434

// Student Name: James Boby Vempala
// Student Number: 8941304

// Student Name: Fenil Moradiya
// Student Number: 8941920

// Importing LocalStorage class from local-storage.js
import { LocalStorage } from "./local-storage.js";

// Define item names for tasks and tasks count in local storage
const tasksItemName = "tasks";
const tasksCountItemName = "tasksCount";

// Class representing a task
class Task {
	constructor(
		name,
		description,
		priority,
		accountable,
		responsible
	) {
		// Initializing task properties
		this.name = name;
		this.description = description;
		this.priority = priority;
		this.accountable = accountable;
		this.responsible = responsible;
	}

	// Method to create a new task
	create() {
		// Creating a new instance of LocalStorage class
		const localStorage = new LocalStorage();

		// Retrieve tasks and tasks count from local storage or initialize them if not exist
		const tasks = localStorage.getItem(tasksItemName) || [];
		const tasksCount = localStorage.getItem(tasksCountItemName) || 0;
		const id = tasksCount + 1;

		// Create new task object
		const task = {
			id: id,
			name: this.name,
			description: this.description,
			priority: this.priority,
			accountable: this.accountable,
			responsible: this.responsible
		};

		// Add new task to tasks array
		tasks.push(task);

		// Update local storage with updated tasks array and tasks count
		localStorage.setItem(tasksItemName, tasks);
		localStorage.setItem(tasksCountItemName, tasksCount + 1);
	}

	// Static method to get all tasks
	static getAll() {
		const localStorage = new LocalStorage();

		// Retrieve tasks from local storage
		const tasks = localStorage.getItem(tasksItemName) || [];

		return tasks;
	}

	// Static method to get a task by ID
	static get(id) {
		const localStorage = new LocalStorage();

		// Retrieve tasks from local storage
		const tasks = localStorage.getItem(tasksItemName) || [];

		// Find task by ID
		const task = tasks.find(task => task.id === id);

		return task;
	}

	// Method to update a task
	update(id) {
		const localStorage = new LocalStorage();

		// Retrieve tasks from local storage
		const tasks = localStorage.getItem(tasksItemName) || [];

		// Find index of task to be updated
		const taskIndex = tasks.findIndex(task => task.id === id);

		// Create updated task object
		const updatedtask = {
			id: id,
			name: this.name,
			description: this.description,
			priority: this.priority,
			accountable: this.accountable,
			responsible: this.responsible
		};

		// Update task in tasks array
		tasks[taskIndex] = updatedtask;

		// Update local storage with updated tasks array
		localStorage.setItem(tasksItemName, tasks);
	}

	// Method to delete a task
	delete(id) {
		const localStorage = new LocalStorage();

		// Retrieve tasks from local storage
		const tasks = localStorage.getItem(tasksItemName) || [];

		// Find index of task to be deleted
		const taskIndex = tasks.findIndex(task => task.id === id);

		// Remove task from tasks array
		tasks.splice(taskIndex, 1);

		// Update local storage with updated tasks array
		localStorage.setItem(tasksItemName, tasks);
	}
}

// Function to validate task name
function validateTaskName(name) {
	if (!name) throw new Error("Name is required");
}

// Function to validate task description
function validateTaskDescription(description) {
	if (!description) throw new Error("Description is required");
}

// Function to validate task priority
function validateTaskPriority(priority) {
	if (!priority) throw new Error("Priority is required");
}

// Function to validate task accountable
function validateTaskAccountable(accountable) {
	if (!accountable) throw new Error("Accountable is required");
}

// Function to validate task responsible
function validateTaskResponsible(responsible) {
	if (!responsible) throw new Error("Assigned To is required");
}

// Exporting Task class and validation functions
export {
	Task,
	validateTaskName,
	validateTaskDescription,
	validateTaskPriority,
	validateTaskAccountable,
	validateTaskResponsible
};