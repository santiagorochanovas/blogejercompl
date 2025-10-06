document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const pais = document.getElementById('pais').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || apellido === '' || correo === '' || mensaje === '') {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    alert('Formulario enviado con éxito!');
    formulario.reset();
  });
});