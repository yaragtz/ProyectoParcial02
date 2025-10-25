// FORMULARIO
const formularioBoletin = document.querySelector('.formulario-boletin');

if (formularioBoletin) {
  formularioBoletin.addEventListener("submit", function (e) {
    e.preventDefault();
    
    formularioBoletin.classList.add('was-validated');
    
    if (formularioBoletin.checkValidity()) {
      const campoNombre = document.getElementById('campoNombre');
      const mensajeExito = document.getElementById("mensajeExito");
      const textoMensaje = document.getElementById("textoMensaje");
      
      if (mensajeExito && textoMensaje && campoNombre) {
        textoMensaje.textContent = `¡Gracias ${campoNombre.value}! Te has suscrito exitosamente.`;
        
        mensajeExito.style.display = "block";
        mensajeExito.classList.add("show");
      
      formularioBoletin.reset();
      formularioBoletin.classList.remove('was-validated');
      
    }
  }
 });
}
