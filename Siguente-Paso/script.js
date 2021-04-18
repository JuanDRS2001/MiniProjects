const progress = document.getElementById('progress')
const ant = document.getElementById('ant')
const sig = document.getElementById('sig')
const circulo = document.querySelectorAll('.circulo')

let currentActive = 1

sig.addEventListener('click', () => {
    currentActive++

    if(currentActive > circulo.length) {
        currentActive = circulo.length
    }

    update()
})

ant.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circulo.forEach((circulo, idx) => {
        if(idx < currentActive) {
            circulo.classList.add('active')
        } else {
            circulo.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circulo.length - 1) * 100 + '%'

    if(currentActive === 1) {
        ant.disabled = true
    } else if(currentActive === circulo.length) {
        sig.disabled = true
    } else {
        ant.disabled = false
        sig.disabled = false
    }
}