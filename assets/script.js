const botaoAbrir = document. querySelector(".header-mobile > button")
botaoAbrir.addEventListener('click', abrirMenu)
const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")
const botaoFechar = document.querySelector(".header-mobile nav button")

function abrirMenu() {
    body.classList.add("menu-open")
    nav.classList.add("abrir")

}

function fecharMenu() {
    body.classList.remove("menu-open")
    nav.classList.remove("abrir")

}