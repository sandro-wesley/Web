//pegando o valor dos inputs
	var nome = document.getElementById("register:nome");
	var data = document.getElementById('register:date');
	var tel = document.getElementById('register:tel');
	var cpf = document.getElementById('register:cpf');
	var email = document.getElementById('register:email');
	var senha = document.getElementById('register:senha');

	
function validarDados() {
	//fazendo a validação
	
	//bloqueia o botao
	 event.preventDefault();
	
	//verifica o nome
	if (nome.value == "" || nome.value.length <= 8){
		
		alert("Insira seu nome completo");
	    nome.focus();
		
		return;
	}			
	/*
	var validaData = function validaData(){
		var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
 if (!patternData.test(data.value)){
    alert("Digite a data no formato Dia/Mes/Ano");
	console.log("Digite a data no formato Dia/Mes/Ano")
	data.focus();
 
}
	}*/
	
	//puxa a função data
	eval(validaData)();
	
	//verifica tel
		 if (tel.value == "" || tel.value.length <= 9) {
		alert("Insira seu telefone (Somente numeros)");
		tel.focus();
		return;
	}
			//verifica cpf
		 if (cpf.value == "" || cpf.value.length != 11) {
		alert("Insira seu cpf (somente numeros 11 digitos) ");
		cpf.focus()	;
		return;
	}		
	
	//verifica email
	if( email.value.indexOf('@')==-1  || email.value.indexOf('.')==-1 ||email == ""){
		alert("email invalido");
		email.focus()	
		return;
	}
	
	if(senha.value.length < 6 || senha.value == ""){
		alert("Insira sua senha, pelo menos 6 digitos");
		senha.focus();
		return;
	} 		
		}
	
	function validaData(){
	//adiciona / nos inputs ex: 10/10/2010
	 if (data.value.length == 2 || data.value.length == 5){
		 data.value += '/'
}

		 if (data.value == "") {
		data.focus();
		}

	// Verificar se o formato da data digitada está correto		
var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
 if (!patternData.test(data.value)){
    alert("Digite a data no formato Dia/Mes/Ano");
	data.focus();
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