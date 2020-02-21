window.addEventListener('load', function validar(){
	
	document.getElementById('userName').addEventListener('input', function() {
		campoName = event.target;
	    if ( campoName.value.length > 7 ) {
			$("#userName").css("border","1px solid green");
			$("#userName").css("color","green");
		}else{
			$("#userName").css("border","1px solid red");
			$("#userName").css("color","red");
		}

	});
	
	document.getElementById('passwordLogin').addEventListener('input', function() {
		campoPass = event.target;
	    if ( campoPass.value.length > 7 ) {
			$("#passwordLogin").css("border","1px solid green");
			$("#passwordLogin").css("color","green");
		}else{
			$("#passwordLogin").css("border","1px solid red");
			$("#passwordLogin").css("color","red");
		}

	});
	
});
