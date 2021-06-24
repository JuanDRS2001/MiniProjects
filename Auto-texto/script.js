const autoTexto = document.getElementById('texto')
const tiempo = document.getElementById('speed')
const texto = "Web Developer <3"
let idx = 1
let speed = 300 / tiempo.value

writeText()

function writeText(){
    autoTexto.innerText = texto.slice(0, idx)
    idx++

    if(idx > texto.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

tiempo.addEventListener('input', (e) => speed = 300 / e.target.value)
