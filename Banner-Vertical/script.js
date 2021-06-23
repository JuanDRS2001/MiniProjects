const contenedorSlide = document.querySelector('.contenedor')
const contenedorDer = document.querySelector('.contenedor-der')
const contenedorIzq = document.querySelector('.contenedor-izq')
const botonArriba = document.querySelector('.boton-arriba')
const botonAbajo = document.querySelector('.boton-abajo')
const contenedorLength = contenedorDer.querySelectorAll('div').length

let activarSlideIndex = 0

contenedorIzq.style.top = `-${(contenedorLength - 1)*100}vh`

botonAbajo.addEventListener('click', ()=> changeSlide('down'))
botonArriba.addEventListener('click', ()=> changeSlide('up'))

const changeSlide = (direction) => {
    const slideHeigth = contenedorSlide.clientHeight
    
    if(direction == 'up'){
        activarSlideIndex++
            if(activarSlideIndex > contenedorLength - 1){
                activarSlideIndex = 0
            }
    } else if(direction == 'down'){
        activarSlideIndex--
            if(activarSlideIndex < 0){
                activarSlideIndex = contenedorLength -1
            }
    }

    contenedorDer.style.transform = `translateY(-${activarSlideIndex * slideHeigth}px)`
    contenedorIzq.style.transform = `translateY(${activarSlideIndex * slideHeigth}px)`


}