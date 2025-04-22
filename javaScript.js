document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const container = document.getElementById('modo-toggle-container');

  // Crear solo el ícono (sin botón)
  const icono = document.createElement('span');
  icono.innerHTML = '🌞'; // Sol por defecto
  icono.style.cursor = 'pointer';
  icono.style.fontSize = '24px';
  icono.title = 'Cambiar modo';

  container.appendChild(icono);

  // Agregar evento al ícono
  icono.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const esModoOscuro = body.classList.contains('dark-mode');
    icono.innerHTML = esModoOscuro ? '🌙' : '🌞';
  });

  // Lógica de envío de formulario
  const formulario = document.getElementById('formContacto');
  if (formulario) {
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;

      if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
      }

      emailjs.sendForm('service_urjhpce', 'template_osc4uh2', this)
        .then(() => {
          alert('¡Mensaje enviado correctamente!');
          formulario.reset();
        }, (error) => {
          alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
    });
  } else {
    console.warn('No se encontró el formulario con id "formContacto".');
  }

  // Fecha y hora
  const now = new Date();
  const fechaInput = document.getElementById('fecha');
  const horaInput = document.getElementById('hora');

  if (fechaInput && horaInput) {
    fechaInput.value = now.toLocaleDateString('es-CR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    horaInput.value = now.toLocaleTimeString('es-CR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
});
