// Highlight
$(document).ready(function () {
	/* ======= Highlight.js Plugin ======= */
	/* Ref: https://highlightjs.org/usage/ */
});

// Change event
var editor = CKEDITOR.replace("editor1", {
	extraPlugins: "codesnippet, emoji, indent, indentlist",
});

editor.on("change", function () {
	var data = editor.getData();

	$("#editorPreview").html(data);
	$("pre code").each(function (i, block) {
		hljs.highlightBlock(block);
	});
	//console.log(data);


	// Blockquote
	$("blockquote").addClass("blockquote m-lg-5 py-3 pl-4 px-lg-5");
	
	// Table
	$("table").removeAttr("cellpadding cellspacing style border");
	$("table").addClass("table table-striped my-5");
});
