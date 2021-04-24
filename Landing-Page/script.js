const izq = document.querySelector('.izq')
const der = document.querySelector('.der')
const contenedor = document.querySelector('.contenedor')

izq.addEventListener('mouseenter', () => contenedor.classList.add('hover-izq'))
izq.addEventListener('mouseleave', () => contenedor.classList.remove('hover-izq'))

der.addEventListener('mouseenter', () => contenedor.classList.add('hover-der'))
der.addEventListener('mouseleave', () => contenedor.classList.remove('hover-der'))