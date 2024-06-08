let img = document.querySelector(".mago")
let clicked = false;

img.addEventListener('click',()=>{
    if(img.style.border == ""){
        img.style.border ="solid 10px black"
    }else{
        img.style.border =""
    }
})