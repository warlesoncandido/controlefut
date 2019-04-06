
var btnEntrar = document.getElementById('entrar');

/*Validando formulario de login*/


btnEntrar.addEventListener("click",function(){
    var login = formlogin.login.value;
    var senha = formlogin.senha.value;
    
    if(login == ""){
        alert("Digite seu Login");
        return false;
    }if(senha ==""){
        alert("Digite sua senha!!");
        return false
    }if(senha.length < 6){
        alert("Sua senha Contém no minimo 6 digitos");
        return false;
    }else{
        return true;
    }

});

/* Abrindo tela de Cadastro em new Window */

document.getElementById('cadhtml').addEventListener('click',function(){

    window.open('cadastro.html',"_blank_","toolbar=false, scrollbars=false,resizable=false, top=200, left=500, width=500, height=600");

});
/* Abrindo tela de Esqueci Senha em new Window */

document.getElementById('senhahtml').addEventListener('click',function(){

    window.open('senha.html',"_blank_","toolbar=false, scrollbars=false,resizable=false, top=200, left=500, width=500, height=600");
    
});

/*Validando formulario de Cadastro*/
function validarCadastro(){
    var nomeCad = formcad.nome.value;
    var usuarioCad= formcad.value;
    var emailCad= formcad.email.value;
    var telefoneCad = formcad.telefone.value;
    var senhaCad =formcad.senha.value;

    if(nomeCad == ""){
        event.preventDefault();
        alert("Digite seu nome completo");
        return false;

    }if(usuarioCad== ""){
        event.preventDefault();
        alert("Digite um nome de usuario ");
        return false;

    }
    if(emailCad == ""){
        event.preventDefault();
        alert("Digite seu email ");
        return false;

    }if(telefoneCad == ""){
        event.preventDefault();
        alert("Digite seu telefone ");
        return false;

    }if(senhaCad == "" || senha.length < 6 ){
        event.preventDefault();
        alert("Digite sua senha, ela devera conter no minimo 6 carateres ");
        return false;

    }else{
        return true;
    }

    var cadastro= {
        nome: nomeCad,
        email : emailCad,
        telefone : telefoneCad,
        senha: senhaCad

    };

}


