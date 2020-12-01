// Blockquote classes
var blockquoteClasses = ["blockquote", "m-lg-5", "py-3", "pl-4", "px-lg-5"];


$(document).ready(function () {
	$("#summernote").summernote({
		placeholder: "Hello Bootstrap 4",
		tabsize: 2,
		height: 500,
		disableGrammar: false,
		styleTags: [
		//	{ title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
		'p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
		],
	});
});

// Change event
$("#summernote").on("summernote.change", function (we, contents, $editable) {
	$("#editorPreview").html($("#summernote").summernote("code"));
	//console.log($("#summernote").summernote("code"));
	
	addBlockQuote();
});


function addBlockQuote() {
	var blogpost = document.getElementById("editorPreview");
	var blockquote = blogpost.getElementsByTagName("blockquote");
	console.log(blockquote);
	for (var i = 0; i < blockquote.length; i++) {
		for (let j = 0; j < blockquoteClasses.length; j++) {
			blockquote[i].classList.add(blockquoteClasses[j]);
		}
	}
}
