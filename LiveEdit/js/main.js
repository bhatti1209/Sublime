$(document).ready(function(){
	var value = "lets change the text";
	
	$('#btnTest').click(function (){
		alert(value);
	});

	window.setInterval(function (){
		$('#testDiv').text(value);
	}, 100);
});