
const palavra_caixa = document.querySelectorAll('.palavras')
const caixa = document.querySelectorAll('.caixa')
const fechar = document.querySelectorAll('.fechar')
let audio
const btn = document.querySelectorAll(".audio")

palavra_caixa[0].addEventListener('click', (e) => {
    caixa[0].style.display = 'block'
    audio = new Audio("assets/schedule.ogg")
})

fechar[0].addEventListener('click', () => {
    caixa[0].style.display = 'none'
})

btn[0].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[1].addEventListener('click', (e) => {
    caixa[1].style.display = 'block'
    audio = new Audio("./assets/world.ogg")
})

fechar[1].addEventListener('click', () => {
    caixa[1].style.display = 'none'
})

btn[1].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[2].addEventListener('click', (e) => {
    caixa[2].style.display = 'block'
    audio = new Audio("./assets/ours.ogg")
})

fechar[2].addEventListener('click', () => {
    caixa[2].style.display = 'none'
})


btn[2].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[3].addEventListener('click', (e) => {
    caixa[3].style.display = 'block'
    audio = new Audio("./assets/literaly.ogg")
})

fechar[3].addEventListener('click', () => {
    caixa[3].style.display = 'none'
})


btn[3].addEventListener("click", () => {
    audio.play()
})

palavra_caixa[4].addEventListener('click', (e) => {
    caixa[4].style.display = 'block'
    audio = new Audio("./assets/iregardless.ogg")
})

fechar[4].addEventListener('click', () => {
    caixa[4].style.display = 'none'
})


btn[4].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[5].addEventListener('click', (e) => {
    caixa[5].style.display = 'block'
    audio = new Audio("./assets/disinterested.ogg")
})

fechar[5].addEventListener('click', () => {
    caixa[5].style.display = 'none'
})


btn[5].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[6].addEventListener('click', (e) => {
    caixa[6].style.display = 'block'
    audio = new Audio("./assets/intersting.ogg")
})

fechar[6].addEventListener('click', () => {
    caixa[6].style.display = 'none'
})


btn[6].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[7].addEventListener('click', (e) => {
    caixa[7].style.display = 'block'
    audio = new Audio("./assets/scatter.ogg")
})

fechar[7].addEventListener('click', () => {
    caixa[7].style.display = 'none'
})

btn[7].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[8].addEventListener('click', (e) => {
    caixa[8].style.display = 'block'
    audio = new Audio("./assets/library.ogg")
})

fechar[8].addEventListener('click', () => {
    caixa[8].style.display = 'none'
})

btn[8].addEventListener("click", () => {
    audio.play()
})


palavra_caixa[9].addEventListener('click', (e) => {
    caixa[9].style.display = 'block'
    audio = new Audio("./assets/ironic.ogg")
})

fechar[9].addEventListener('click', () => {
    caixa[9].style.display = 'none'
})

btn[9].addEventListener("click", () => {
    audio.play()
})