const btnAbrirMenu = document.getElementById("btn-abrir-menu")
const btnCerrarMenu = document.getElementById("btn-cerrar-menu")
const classIconMenu = document.getElementById("id-nav-mobile")
const containerMenu = document.getElementById("id-nav-container")
const clickLinkNav = document.getElementsByClassName("nav__mobile--a")

btnAbrirMenu.addEventListener('click', () => {

    classIconMenu.classList.remove("animate__slideOutLeft")
    
    classIconMenu.classList.add("animate__slideInLeft")

    containerMenu.classList.toggle("nav__mobile--active")

})

btnCerrarMenu.addEventListener('click', () => {

    classIconMenu.classList.remove("animate__slideInLeft")

    classIconMenu.classList.add("animate__slideOutLeft")

    setTimeout(() => {

        containerMenu.classList.toggle("nav__mobile--active")

    }, 100)

})
containerMenu.addEventListener('click', () => {
    btnCerrarMenu.click()
})

classIconMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})

for(let i = 0 ; i <= clickLinkNav.length - 1 ; i++){
    $(clickLinkNav[i]).click(() => {

        classIconMenu.classList.remove("animate__slideInLeft")

        classIconMenu.classList.add("animate__slideOutLeft")

        setTimeout(() => {

            containerMenu.classList.toggle("nav__mobile--active")

        }, 100)

    })
}
