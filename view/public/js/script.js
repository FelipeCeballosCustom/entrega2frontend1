import { buscarUsuario } from "../../../controller/ControllerUsuarios.js"
document.querySelector('#btnIniciar').addEventListener('click', iniciarSesion)
let intentos = 0
function iniciarSesion(){ 
    if (buscarUsuario()){
        window.location.href = '/view/pages/home.html'
    } else {
        intentos++
        if (intentos < 3){
            let numerointentos = 3
            numerointentos -= intentos
            alert ('Error de credenciales' + 'te quedan ' + numerointentos + ' intentos')
        } else {
            alert ('Has alcanzado el maximo número de intentos.')
        }
    }
}

