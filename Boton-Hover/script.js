const boton = document.querySelectorAll('.ripple');

boton.forEach(button => {
    button.addEventListener('click', function (e){
        const x = e.clientX;
        const y = e.clientY;
    
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circulo = document.createElement('span');
        circulo.classList.add('circulo');
        circulo.style.top = yInside + 'px';
        circulo.style.left = xInside + 'px';

        this.appendChild(circulo);

        setTimeout(() => circulo.remove(), 500)
    })
});