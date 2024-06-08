let verificar = document.querySelector("#verificar")
let suma = 0

verificar.addEventListener('click',()=>{
    let input1 = parseInt(document.querySelector("#input1").value)
    let input2 = parseInt(document.querySelector("#input2").value)
    let input3 = parseInt(document.querySelector("#input3").value)

    suma = input1 + input2 + input3
    if(suma > 0){
        if(suma > 10){
            document.querySelector("h2").innerHTML = "Llevas demasiados stickers"
        }else{
            document.querySelector("h2").innerHTML = ("Llevas "+String(suma)+" Stickers")
        }
    }else{
        document.querySelector("h2").innerHTML = "Si no deseas un diseño, ingresa 0"
    }
    
})