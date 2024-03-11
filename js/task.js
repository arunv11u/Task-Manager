import { LocalStorage } from "./local-storage.js";

const tasksItemName = "tasks";

class Task {

	constructor(
		name,
		description,
		priority,
		accountable,
		responsible
	) {
		this.name = name;
		this.description = description;
		this.priority = priority;
		this.accountable = accountable;
		this.responsible = responsible;
	}

	create() {
		const localStorage = new LocalStorage();

		const tasks = localStorage.getItem(tasksItemName) || [];
		const id = tasks.length + 1;

		const task = {
			id: id,
			name: this.name,
			description: this.description,
			priority: this.priority,
			accountable: this.accountable,
			responsible: this.responsible
		};
		tasks.push(task);

		localStorage.setItem(tasksItemName, tasks);
	}

	get(id) {
		const localStorage = new LocalStorage();

		const tasks = localStorage.getItem(tasksItemName) || [];
		const task = tasks.find(task => task.id === id);

		return task;
	}

	update(id) {
		const localStorage = new LocalStorage();

		const tasks = localStorage.getItem(tasksItemName) || [];
		const taskIndex = tasks.findIndex(task => task.id === id);

		const updatedtask = {
			id: id,
			name: this.name,
			description: this.description,
			priority: this.priority,
			accountable: this.accountable,
			responsible: this.responsible
		};
		tasks[taskIndex] = updatedtask;

		localStorage.setItem(tasksItemName, tasks);
	}
}

function validateTaskName(name) {
	if (!name) throw new Error("Name is required");
}

function validateTaskDescription(description) {
	if (!description) throw new Error("Description is required");
}

function validateTaskPriority(priority) {
	if (!priority) throw new Error("Priority is required");
}

function validateTaskAccountable(accountable) {
	if (!accountable) throw new Error("Accountable is required");
}

function validateTaskResponsible(responsible) {
	if (!responsible) throw new Error("Responsible is required");
}

export {
	Task,
	validateTaskName,
	validateTaskDescription,
	validateTaskPriority,
	validateTaskAccountable,
	validateTaskResponsible
};