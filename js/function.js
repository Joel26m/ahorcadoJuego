let nombreUsuario;
function solicitarNombreUsuario() {
    // Muestra el modal
    $('#nombreUsuarioModal').modal('show');
}

function guardarNombreUsuario() {
    // Obtiene el nombre desde el input del modal
    nombreUsuario = document.getElementById('nombreUsuarioInput').value.trim();

    // Si el usuario no ingresa un nombre, asigna uno predeterminado
    if (!nombreUsuario) {
        nombreUsuario = "Anónimo";
    }

    // Muestra un saludo con el nombre del usuario
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Hola, " + nombreUsuario + " \n\ ¡Buena suerte!",
        showConfirmButton: false,
        timer: 1500
      });

    // Cierra el modal
    $('#nombreUsuarioModal').modal('hide');
}

function mostrarVentanaFinal(acertado) {
    
    // Obtén la imagen e información del animal adivinado
    let imagenAnimal = palabraSeleccionada.imagen;
    let informacionAnimal = palabraSeleccionada.informacion;

    // Configuración de ventana
    const configuracionSweetAlert = {
        imageUrl: imagenAnimal,
        imageWidth: 200, // Ajusta el ancho de la imagen según sea necesario
        title: acertado ? '¡Felicidades!' : '¡Has perdido!',
        text: acertado ? `Has adivinado la palabra: ${palabraSecreta}` : `La palabra correcta era: ${palabraSecreta}`,
        html: `<p>${informacionAnimal}</p>`,
        confirmButtonText: 'Volver a jugar',
        confirmButtonColor: '#D0833C'
    };

    // Muestra la ventana 
    Swal.fire(configuracionSweetAlert).then((result) => {
        // Puedes agregar lógica adicional aquí si es necesario
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