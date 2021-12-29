const idForm = document.getElementById("form")
const containerCartel = document.getElementById("container-cartel-form")
const cartelFormulario = document.getElementById("cartel-form")
const btnCerrarCartel = document.getElementById("btn-cerrar-cartel")
const nameInput = document.getElementById("name")
const phoneInput = document.getElementById("phone")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")
const urlEmail = document.getElementById("a-mail-form")

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

function formFunction(event){

    event.preventDefault()

    if(nameInput.value > ""  && phoneInput.value > "" && emailInput.value > "" && messageInput.value > ""){
        containerCartel.classList.toggle("active-cartel-form")
    }

    const form = new FormData(this)

    urlEmail.setAttribute('href', `mailto:miltoncoria555@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')} Télefono: ${form.get('phone')}&body=${form.get('message')}`)

    urlEmail.click()
}