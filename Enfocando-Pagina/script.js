const loadText = document.querySelector('.porcentaje')
const bg = document.querySelector('.bg')

let carga = 0

let int = setInterval(blurring, 30)

function blurring() {
  carga++

  if (carga > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${carga}%`
  loadText.style.opacity = scale(carga, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(carga, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }