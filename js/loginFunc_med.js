	var email = document.getElementById('login:email');
	var senha = document.getElementById('login:senha');
	
	function validarDados() {	 
	
	if( email.value.indexOf('@')==-1  || email.value.indexOf('.')==-1 ||email == ""){
		alert("email invalido");
		email.focus()	
		
		event.preventDefault();
		return;
	}
	
	if(senha.value.length < 6 || senha.value == ""){
		alert("Insira sua senha, pelo menos 6 digitos");
		senha.focus();
		event.preventDefault();
		return;
	}
	
	else {
		return true;
	} 	
}