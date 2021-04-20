const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const contenedor = document.querySelector('.contenedor');

abrir.addEventListener('click', () => contenedor.classList.add('show-nav'));

cerrar.addEventListener('click', () => contenedor.classList.remove('show-nav'));
