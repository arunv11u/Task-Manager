
$(() => {
	$("#delete-task").on("click", () => {
		$("#modal").css("display", "flex");
	});

	$("#modal-cancel-task-deletion").on("click", () => $("#modal").css("display", "none"));
});