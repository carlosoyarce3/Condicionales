let validar = document.querySelector("#validar")
let pass1 = "911"
let pass2 = "714"

validar.addEventListener('click', ()=> {
    let digito1 = document.querySelector("#digito1")
    let digito2 = document.querySelector("#digito2")
    let digito3 = document.querySelector("#digito3")
    let intento = String(digito1.value + digito2.value + digito3.value)
    
    if (intento == pass1){
        document.querySelector("#resultado").innerHTML = "password 1 correcto"
    }
    else if (intento == pass2){
        document.querySelector("#resultado").innerHTML = "password 2 es correcto"
    } else {
        document.querySelector("#resultado").innerHTML = "password es incorrecto"
    }
})