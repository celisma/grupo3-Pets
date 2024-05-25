
var inputs = document.getElementsByClassName('formulario__input');
for (var i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }
        else{       
            this.nextElementSibling.classList.remove('fijar');  
        }       
    });
}


const nombre = document.getElementById("firtsname")
const apellido = document.getElementById("surname")
const email = document.getElementById("email")
const tel = document.getElementById("phone")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit",e=>{
    e.preventDefault
    if(firstname.value.length <6){
        alert("Nombre muy corto")
    }
})