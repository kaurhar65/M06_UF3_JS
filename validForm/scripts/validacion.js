
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

//Validar el correo
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
