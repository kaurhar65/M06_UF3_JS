
//Comprobar si el campo está vaio o lleno.
const inputs = document.querySelectorAll('input');
for(let i=0; i<inputs.length; i++){
    let inputActual = inputs[i];

    inputActual.addEventListener('focusout', function(){
        if(inputActual.value === ''){
            inputActual.classList.add('campBuit');
            inputActual.classList.remove('campPle');
        }else{
            inputActual.classList.remove('campBuit');
            inputActual.classList.add('campPle');
        }
    });
}

// Validar el correo
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

//obtener el mensaje y el input
const inputCorreo = document.getElementById('email');
const mensajeCorreo = document.getElementById('errorCorreo');
mensajeCorreo.hidden = true;

inputCorreo.addEventListener('focusout', function(){
    let correo = inputCorreo.value;
    if(validateEmail(correo)){
        inputCorreo.classList.remove('campBuit');
        inputCorreo.classList.add('campPle');
        mensajeCorreo.hidden = true;
    }else{
        inputCorreo.classList.add('campBuit');
        inputCorreo.classList.remove('campPle');
        mensajeCorreo.hidden = false;
    }   

});

const inputPass = document.getElementById('contrasenya');
const divMensajes = document.getElementById('mensajesError');
divMensajes.hidden = true;
const mensajes = {
    longitud: document.getElementById('8Char'),
    mayus: document.getElementById('mayus'),
    minus: document.getElementById('minus'),
    specialChar: document.getElementById('specialChar'),
    num: document.getElementById('1num')
};


inputPass.addEventListener('input', function(){
    divMensajes.hidden = false;
    let password = inputPass.value;
    mensajes.longitud.style.color = longitud(password) ? 'green' : 'red';
    mensajes.mayus.style.color = letrasMayus(password) ? 'green' : 'red';
    mensajes.minus.style.color = letrasMinus(password) ? 'green' : 'red';
    mensajes.specialChar.style.color = contieneCharEsp(password) ? 'green' : 'red';
    mensajes.num.style.color = contieneNumero(password) ? 'green' : 'red';
});


function longitud(password){
    return password.length >= 8 && password.length <= 15 ? true : false;
}

function letrasMinus(password){
    let lowerCaseLetters = /[a-z]/;
    return lowerCaseLetters.test(password) ? true : false;

}

function letrasMayus(password){
    let upperCaseLetters = /[A-Z]/;
    return upperCaseLetters.test(password) ? true : false;
}

function contieneNumero(password){
    let numbers = /[0-9]/;
    return numbers.test(password) ? true : false;
}

function contieneCharEsp(password){
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password) ? true : false;
}