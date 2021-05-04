const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {
    contador.innerText = '0'

    const updateContador = () => {
        const target = +contador.getAttribute('data-target')
        console.log(typeof target, target)
        const c = +contador.innerText

        const increment = target / 200

        if(c < target){
            contador.innerText = `${Math.ceil(c + increment)}`
            setTimeout (updateContador, 1)
        }else{
            contador,innerText= target
        }

    }

    updateContador()
})