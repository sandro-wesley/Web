//pegando o valor dos inputs
	var nome = document.getElementById("register:nome");
	var data = document.getElementById('register:date');
	var tel = document.getElementById('register:tel');
	var cpf = document.getElementById('register:cpf');
	var email = document.getElementById('register:email');
	var senha = document.getElementById('register:senha');
	var especialidade = document.getElementById('register:espec');

	
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

			// Verificar se o formato da data digitada está correto		
var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
 if (!patternData.test(data.value)){
    alert("Digite a data no formato Dia/Mes/Ano");
	data.focus();
		//bloqueia o botao
	 event.preventDefault();
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
			//verifica cpf
		 if (cpf.value == "" || cpf.value.length != 11) {
			//bloqueia o botao
	 event.preventDefault();
		alert("Insira seu cpf (somente numeros 11 digitos) ");
		cpf.focus();
		return;
	}		
	
	if (especialidade.value ==""){
		alert("insira sua especialidade");
		especialidade.focus();
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

function mascara_data(campo, valor){
  var mydata = '';
  mydata = mydata + valor;
  if (mydata.length == 2){
    mydata = mydata + '/';
    campo.value = mydata;
  }
  if (mydata.length == 5){
    mydata = mydata + '/';
    campo.value = mydata;
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