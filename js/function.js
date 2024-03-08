let nombreUsuario = '';
function solicitarNombreUsuario() {
    // Muestra el modal
    $('#nombreUsuarioModal').modal('show');
}

function guardarNombreUsuario() {
    nombreUsuario = document.getElementById('nombreUsuarioInput').value.trim();

    if (!nombreUsuario) {
        nombreUsuario = "Anónimo";
    }

    // Mostrar saludo 
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Hola, " + nombreUsuario + " \n\ ¡Buena suerte!",
        showConfirmButton: false,
        timer: 1500
      });

    // Cerrar el modal
    $('#nombreUsuarioModal').modal('hide');
    
    
}

const btnInstrucciones = document.getElementById('btnInstrucciones');
const modalInstrucciones = document.getElementById('modalInstrucciones');
const closeModal = document.getElementsByClassName('close')[0];

// Mostrar el modal al hacer clic en el botón
btnInstrucciones.onclick = function() {
    modalInstrucciones.style.display = 'block';
}

// Ocultar el modal al hacer clic en la "x"
closeModal.onclick = function() {
    modalInstrucciones.style.display = 'none';
}

// Ocultar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modalInstrucciones) {
        modalInstrucciones.style.display = 'none';
    }
}

function mostrarVentanaFinal(acertado) {
    
    // ObtENER la imagen e información del animal adivinado
    let imagenAnimal = palabraSeleccionada.imagen;
    let informacionAnimal = palabraSeleccionada.informacion;

    // Configuración de ventana
    const configuracionSweetAlert = {
        imageUrl: imagenAnimal,
        imageWidth: 200, 
        title: acertado ? '¡Felicidades!' : '¡Has perdido!',
        text: acertado ? `Has adivinado la palabra: ${palabraSecreta}` : `La palabra correcta era: ${palabraSecreta}`,
        html: `<p>${informacionAnimal}</p>`,
        confirmButtonText: 'Volver a jugar',
        confirmButtonColor: '#D0833C'
    };

    Swal.fire(configuracionSweetAlert).then((result) => {

        if (result.isConfirmed) {
            reiniciarJuego();
        }
    });
}

function guardarEnLocalStorage() {
    localStorage.setItem('nombreUsuario', nombreUsuario);
    localStorage.setItem('palabraSecreta', palabraSecreta);
    localStorage.setItem('palabraEnProceso', palabraEnProceso);
    localStorage.setItem('pista', palabraSeleccionada.pista);
    localStorage.setItem('categoria', categoriaActual.categoria);
    localStorage.setItem('intentosRestantes', intentosRestantes);    
}

function recuperarDeLocalStorage() {
    palabraSecreta = localStorage.getItem('palabraSecreta') || palabraSecreta;
    palabraEnProceso = localStorage.getItem('palabraEnProceso') || palabraEnProceso;
    intentosRestantes = localStorage.getItem('intentosRestantes') || intentosRestantes;
    //letrasUtilizadas = JSON.parse(localStorage.getItem('letrasUtilizadas')) || [];
    nombreUsuario = localStorage.getItem('nombreUsuario') || nombreUsuario;
    palabraSeleccionada.pista = localStorage.getItem('pista') || palabraSeleccionada.pista;
    categoriaActual.categoria = localStorage.getItem('categoria') || categoriaActual.categoria;
}

function limpiarLocalStorage() {
    localStorage.removeItem('palabraEnProceso');
    localStorage.removeItem('letrasUtilizadas');
    localStorage.removeItem('pista');
    localStorage.removeItem('categoria');
    
  
   
}