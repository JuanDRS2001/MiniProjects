const sonidos = ['Perro', 'Gato', 'Caballo', 'Burro', 'Vaca', 'Cerdo', 'Pavo', 'Elefante', 'Lobo', 'Leon']


sonidos.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn'  )

    btn.innerText = sound

    btn.addEventListener('click', ()=> {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('botones').appendChild(btn)
})

function stopSongs() {
    sonidos.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}