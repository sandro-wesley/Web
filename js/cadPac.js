//pegando o valor dos inputs
	var nome = document.getElementById('register:nome');
	var tel = document.getElementById('register:tel');
	var email = document.getElementById('register:email');
	var senha = document.getElementById('register:senha');

	
function validarDados() {
	//fazendo a validação
	

	
	//verifica o nome
	if (nome.value == "" || nome.value.length <= 8){
			//bloqueia o botao
	 event.preventDefault();
		alert("Insira seu nome completo");
	    nome.focus();
		
		return;
	}			

	//verifica email
	if( email.value.indexOf('@')==-1  || email.value.indexOf('.')==-1 ||email == ""){
			//bloqueia o botao
	 event.preventDefault();
		alert("email invalido");
		email.focus()	
		return;
	}

	//verifica tel
		 if (tel.value == "" || tel.value.length <= 9) {
			//bloqueia o botao
	 event.preventDefault();
		alert("Insira seu telefone (Somente numeros)");
		tel.focus();
		
		return;
	}
	
	if(senha.value.length < 6 || senha.value == ""){
			//bloqueia o botao
	 event.preventDefault();
		alert("Insira sua senha, pelo menos 6 digitos");
		senha.focus();
		return;
	} 	
		//puxa a função data
	
	else{ 
		return true;
	}
}


	//função para permitir apenas numeros
function somenteNumeros(e) {
        var charCode = e.charCode ? e.charCode : e.keyCode;
        // charCode 8 = backspace   
        // charCode 9 = tab
        if (charCode != 8 && charCode != 9) {
            // charCode 48 equivale a 0   
            // charCode 57 equivale a 9
            if (charCode < 48 || charCode > 57) {
                return false;
            }
        }
    }