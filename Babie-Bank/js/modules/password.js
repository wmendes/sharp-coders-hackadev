const email = document.getElementById(`email`);

function isEmailValid(email) {   
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (res.test(email.value)){
    return true;
   }
   else {
    return false;
   }
}

function onClickRecPassword() {
    if ( isEmailValid(email) ){
        alert('implementar aqui a troca de senha');
    }
    else {
      alert('implementar aqui a mensagem de erro');
    }
}

function onClickCancel(){
    alert('implementar aqui a funçao de cancelar e retornar a tela de login');
}