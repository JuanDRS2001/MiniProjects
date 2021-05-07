const body = document.body
const banners = document.querySelectorAll('.banner')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activarBanner = 0

rightBtn.addEventListener('click', () => {
  activarBanner++

  if (activarBanner > banners.length - 1) {
    activarBanner = 0
  }

  setBgToBody()
  setActivarBanner()
})

leftBtn.addEventListener('click', () => {
  activarBanner--

  if (activarBanner < 0) {
    activarBanner = banners.length - 1
  }

  setBgToBody()
  setActivarBanner()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = banners[activarBanner].style.backgroundImage
}

function setActivarBanner() {
  banners.forEach((banner) => banner.classList.remove('active'))

  banners[activarBanner].classList.add('active')
}