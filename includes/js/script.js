// Highlight
$(document).ready(function () {
	/* ======= Highlight.js Plugin ======= */
	/* Ref: https://highlightjs.org/usage/ */
});

// Change event
var editor = CKEDITOR.replace("editor1", {
	extraPlugins: "codesnippet, emoji",
});

editor.on("change", function () {
	var data = editor.getData();

	$("#editorPreview").html(data);
	$("pre code").each(function (i, block) {
		hljs.highlightBlock(block);
	});
	//console.log(data);
});
