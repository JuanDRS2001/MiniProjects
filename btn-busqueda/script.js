const buscador = document.querySelector('.buscador');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=>{
    buscador.classList.toggle('active')
    input.focus()
})