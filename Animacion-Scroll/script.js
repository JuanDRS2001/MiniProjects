const cajas = document.querySelectorAll('.contenido');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5*4

    cajas.forEach(contenido =>{
        const contenidoTop = contenido.getBoundingClientRect().top

        if(contenidoTop < triggerBottom){
            contenido.classList.add('show')
        }else{
            contenido.classList.remove('show')
        }
    });

}