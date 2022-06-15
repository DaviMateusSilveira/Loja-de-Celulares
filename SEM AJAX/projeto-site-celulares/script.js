function redirectLogin() {
    window.location.href = "login.html";
}

function redirectRegistro() {
    window.location.href = "registro.html";
}

function redirectHome() {
    window.location.href = "index.html";
}

function redirectSobre() {
    window.location.href = "sobre.html";
}

function redirectProduto() {
    window.location.href = "produtos.html";
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

const phone = document.getElementById("phone");

phone.addEventListener('keypress', () => {
     let phoneLength = phone.value.length

     if (phoneLength === 0) {
         phone.value += '('
     }else if (phoneLength === 3) {
         phone.value += ')'
     }
     else if (phoneLength === 9) {
        phone.value += '-'
     }
    });

const date = document.getElementById("date")

date.addEventListener('keypress', () => {
    let dateLength = date.value.length

    if (dateLength === 2 || dateLength === 5) {
        date.value += '/'
    }
});