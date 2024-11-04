// Seleccionar el formulario por su id
const form = document.getElementById('form-sugerencias');
const mensajeExito = document.getElementById('mensaje-exito');

// Agregar un listener para el evento de submit
form.addEventListener('submit', function(event) {
    // Evitar que se recargue la página al enviar el formulario
    event.preventDefault();
    
    // Capturar los valores de los campos del formulario
    const nombre = document.getElementById('nombre-sug').value;
    const email = document.getElementById('email-sug').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Almacenar los datos en variables (para demostración)
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', mensaje);
    
    // Aquí puedes hacer algo con los datos, como enviarlos a un servidor o mostrarlos en la página

    // Mostrar el mensaje de éxito
    mensajeExito.style.display = 'block';
        
    // Limpiar el formulario (opcional)
    form.reset();
    
    // Opcionalmente, ocultar el mensaje después de unos segundos
    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 3000); // Ocultar el mensaje después de 3 segundos
});