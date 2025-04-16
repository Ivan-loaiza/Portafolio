document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Modo Oscuro';
    document.body.insertBefore(toggleButton, document.body.firstChild);
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      toggleButton.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
    });
  

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
  });
  
  const now = new Date();

document.getElementById('fecha').value = now.toLocaleDateString('es-CR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});

document.getElementById('hora').value = now.toLocaleTimeString('es-CR', {
  hour: '2-digit',
  minute: '2-digit'
});

  