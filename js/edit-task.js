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
  const task = new Task().get(id);

  $("#name").val(task.name);
  $("#description").val(task.description);
  $("#priority").val(task.priority);
  $("#accountable").val(task.accountable);
  $("#responsible").val(task.responsible);

  //validate and display errors on form
  $("#name").on("input", () => {
    try {
      validateTaskName($("#name").val());

      $("#name-error").text("");
    } catch (error) {
      $("#name-error").text(error.message);
    }
  });

  $("#description").on("input", () => {
    try {
      validateTaskDescription($("#description").val());

      $("#description-error").text("");
    } catch (error) {
      $("#description-error").text(error.message);
    }
  });

  $("#priority").on("input", () => {
    try {
      validateTaskPriority($("#priority").val());

      $("#priority-error").text("");
    } catch (error) {
      $("#priority-error").text(error.message);
    }
  });

  $("#accountable").on("input", () => {
    try {
      validateTaskAccountable($("#accountable").val());

      $("#accountable-error").text("");
    } catch (error) {
      $("#accountable-error").text(error.message);
    }
  });

  $("#responsible").on("input", () => {
    try {
      validateTaskResponsible($("#responsible").val());

      $("#responsible-error").text("");
    } catch (error) {
      $("#responsible-error").text(error.message);
    }
  });

  //update task
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

      $("#name-error").text("");
    } catch (error) {
      isInvalidAddTaskForm = true;

      $("#name-error").text(error.message);
    }

    try {
      validateTaskDescription(description);

      $("#description-error").text("");
    } catch (error) {
      isInvalidAddTaskForm = true;

      $("#description-error").text(error.message);
    }

    try {
      validateTaskPriority(priority);

      $("#priority-error").text("");
    } catch (error) {
      isInvalidAddTaskForm = true;

      $("#priority-error").text(error.message);
    }

    try {
      validateTaskAccountable(accountable);

      $("#accountable-error").text("");
    } catch (error) {
      isInvalidAddTaskForm = true;

      $("#accountable-error").text(error.message);
    }

    try {
      validateTaskResponsible(responsible);

      $("#responsible-error").text("");
    } catch (error) {
      isInvalidAddTaskForm = true;

      $("#responsible-error").text(error.message);
    }

    if (isInvalidAddTaskForm) return;

    task.update(id);
    location.href = "../index.html";
  });

  $("#back").on("click", () => {
    location.href = "../index.html";
  });
});
