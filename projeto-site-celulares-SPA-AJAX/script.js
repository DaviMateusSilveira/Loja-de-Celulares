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

function tryHandleElements() {
    tryHandlePhoneElement();
    tryHandleDateElement();
    tryHandleToggleElement();
}

tryHandleElements();

function tryHandlePhoneElement() {
    const phone = document.getElementById("phone");

    if(!phone) return;

    phone.addEventListener('keypress', () => {
        let phoneLength = phone.value.length
        
        if(phoneLength === 0) {
            phone.value += '('
        } else if(phoneLength === 3) {
            phone.value += ')'
        } else if(phoneLength === 9) {
           phone.value += '-'
        }
    });
}

function tryHandleDateElement() {
    const date = document.getElementById("date")

    if(!date) return;

    date.addEventListener('keypress', () => {
        let dateLength = date.value.length
    
        if (dateLength === 2 || dateLength === 5) {
            date.value += '/'
        }
    });
}

function tryHandleToggleElement() {
    const hint = document.getElementById('ultimoProdutos2');
    const btn = document.getElementById('btn');

    if(!hint || !btn) return;

    btn.addEventListener('click', function(){
    var ctr = 1;
    hint.className = hint.className !== 'show' ? 'show' : 'hide';
    if (hint.className === 'show') {
        hint.style.display = 'block';
        window.setTimeout(function(){
        hint.style.opacity = 1;
        hint.style.transform = 'scale(1)';
        },0);
    }
    if (hint.className === 'hide') {
        hint.style.opacity = 0;
        hint.style.transform = 'scale(0)';
        window.setTimeout(function(){
        hint.style.display = 'none';
        },700); // timed to match animation-duration
        }
    });
}