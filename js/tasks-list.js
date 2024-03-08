
$(() => {

	$("#add-task").on("click", () => location.href = "./add-task.html");

});

function editTask(id) {
	location.href = `./edit-task.html?id=${id}`;
}