const idForm = document.getElementById("form")
const containerCartel = document.getElementById("container-cartel-form")
const cartelFormulario = document.getElementById("cartel-form")
const btnCerrarCartel = document.getElementById("btn-cerrar-cartel")
const nameInput = document.getElementById("name")
const phoneInput = document.getElementById("phone")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")

idForm.addEventListener('submit', formFunction)

btnCerrarCartel.addEventListener('click', () => {

    containerCartel.classList.toggle("active-cartel-form")

    location.reload()

})

containerCartel.addEventListener('click', () => {
    btnCerrarCartel.click()
})

cartelFormulario.addEventListener('click', (e) => {
    e.stopPropagation()
})

function formFunction(){

    if(nameInput.value > ""  && phoneInput.value > "" && emailInput.value > "" && messageInput.value > ""){
        containerCartel.classList.toggle("active-cartel-form")
    }

}