const animales = {
    aves: {
        palabras: [
            { nombre: 'Aguila', informacion: 'El águila es un ave rapaz conocida por su aguda visión y poderoso pico.', pista: 'Tiene un pico fuerte y vuela alto.', imagen: 'img/imgPalabras/aguila.png' },
            { nombre: 'Colibri', informacion: 'El colibrí es un pequeño pájaro conocido por su rápido aleteo y colorido plumaje.', pista: 'Es muy pequeño y le gusta el néctar de las flores.', imagen: 'img/imgPalabras/colibri.png'  },
            { nombre: 'Pinguino', informacion: 'El pingüino es un ave marina que no vuela y se desplaza mejor en el agua.', pista: 'Vive en el Polo Sur y no puede volar.', imagen: 'img/imgPalabras/pinguino.png'  },
            { nombre: 'Buho', informacion: 'El búho es un ave nocturna con ojos grandes y capacidad para girar la cabeza.', pista: 'Es un cazador nocturno y tiene ojos grandes.', imagen: 'img/imgPalabras/buho.png' },
            { nombre: 'Avestruz', informacion: 'El avestruz es el ave más grande del mundo y no puede volar, pero es un corredor rápido.', pista: 'Es un ave grande que corre rápido pero no puede volar.', imagen: 'img/imgPalabras/avestruz.png' }
        ],
        categoria: 'Aves'
    },
    animalesDomesticos: {
        palabras: [
            { nombre: 'Perro', informacion: 'El perro es un fiel compañero del ser humano y viene en muchas razas diferentes.', pista: 'Es leal y viene en razas como labrador o pastor alemán.', imagen: 'img/imgPalabras/perro.png' },
            { nombre: 'Gato', informacion: 'El gato es un animal doméstico independiente y limpio.', pista: 'Es un animal peludo que suele maullar y le gusta cazar ratones.', imagen: 'img/imgPalabras/gato.png' },
            { nombre: 'Caballo', informacion: 'El caballo es un mamífero fuerte y ágil que ha sido usado por los humanos para diversas tareas.', pista: 'Es un animal de cuatro patas que suele ser montado por las personas.', imagen: 'img/imgPalabras/caballo.png' },
            { nombre: 'Loro', informacion: 'El loro es un ave que puede imitar sonidos y palabras humanas.', pista: 'Es un ave colorida que puede hablar como las personas.', imagen: 'img/imgPalabras/loro.png' },
            { nombre: 'Conejo', informacion: 'El conejo es un animal pequeño y peludo que se reproduce rápidamente.', pista: 'Es un animal que salta y tiene orejas largas.', imagen: 'img/imgPalabras/conejo.png' }
        ],
        categoria: 'Animales domésticos'
    },
    animalesPeligroExtincion: {
        palabras: [
            { nombre: 'Pangolin', informacion: 'El pangolín es un mamífero cubierto de escamas que se enrolla en una bola para protegerse.', pista: 'Es un animal escamoso que se protege enrollándose.', imagen: 'img/imgPalabras/pangolin.png' },
            { nombre: 'Chimpance', informacion: 'El chimpancé es un primate inteligente y comparte un alto porcentaje de ADN con los humanos.', pista: 'Es un simio muy similar a nosotros en apariencia y comportamiento.', imagen: 'img/imgPalabras/chimpance.png' },
            { nombre: 'Panda Gigante', informacion: 'El panda gigante es un oso nativo de China y se alimenta principalmente de bambú.', pista: 'Es un oso negro y blanco que come bambú.', imagen: 'img/imgPalabras/panda.png' },
            { nombre: 'Leon', informacion: 'El león es un gran felino conocido por su melena y comportamiento social en manadas.', pista: 'Es el "rey de la selva" y tiene una melena distintiva.', imagen: 'img/imgPalabras/leon.png' },
            { nombre: 'Oso Polar', informacion: 'El oso polar es un mamífero marino que vive en el Ártico y depende del hielo marino para cazar.', pista: 'Es un oso blanco que vive en el Polo Norte y caza en el hielo.', imagen: 'img/imgPalabras/oso_polar.png' }
        ],
        categoria: 'Animales en peligro de extinción'
    },
    reptiles: {
        palabras: [
            { nombre: 'Tortuga', informacion: 'La tortuga es un reptil con un caparazón duro que le sirve como protección.', pista: 'Es un reptil lento con un caparazón que puede esconderse dentro.', imagen: 'img/imgPalabras/tortuga.png' },
            { nombre: 'Cocodrilo', informacion: 'El cocodrilo es un reptil acuático grande con mandíbulas fuertes y afiladas.', pista: 'Es un reptil que vive en el agua y tiene mandíbulas poderosas.', imagen: 'img/imgPalabras/cocodrilo.png' },
            { nombre: 'Iguana', informacion: 'La iguana es un lagarto herbívoro que vive en climas cálidos y se alimenta de plantas.', pista: 'Es un lagarto colorido que vive en lugares calientes y come plantas.', imagen: 'img/imgPalabras/iguana.png' },
            { nombre: 'Camaleon', informacion: 'El camaleón es un lagarto conocido por su capacidad para cambiar de color.', pista: 'Es un lagarto que puede cambiar de color para camuflarse.', imagen: 'img/imgPalabras/camaleon.png' },
            { nombre: 'Gecko', informacion: 'El gecko es un pequeño lagarto nocturno que puede adherirse a superficies verticales.', pista: 'Es un lagarto que puede caminar por las paredes y techos.', imagen: 'img/imgPalabras/gecko.png' }
        ],
        categoria: 'Reptiles'
    }
};


// Selecciona una categoría al azar
const categorias = Object.keys(animales);
const categoriaSeleccionada = categorias[Math.floor(Math.random() * categorias.length)];

// Selecciona una palabra al azar de la categoría seleccionada
const categoriaActual = animales[categoriaSeleccionada];
const palabrasCategoria = categoriaActual.palabras;
const palabraSeleccionada = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];


let palabraSecreta = palabraSeleccionada.nombre;

const pista = document.getElementById("pista");
pista.innerHTML = `<i class="fas fa-question-circle"></i> ${palabraSeleccionada.pista}`;

const categoria = document.getElementById("categoria");
categoria.textContent = "Categoria: " + categoriaActual.categoria;


// Máscara para la palabra
//let palabraEnProceso = "_".repeat(palabraSecreta.length);
//let palabraEnProceso = palabraSecreta.replace(/ /g, '_').replace(/./g, '_ ');
let palabraEnProceso = palabraSecreta.split('').map(letra => (letra === ' ' ? ' ' : '_')).join('').toLowerCase();


// Número de intentos permitidos
const maxIntentos = 7;
let intentosRestantes = maxIntentos;

function iniciarJuego() {
    recuperarDeLocalStorage();
    if (!nombreUsuario) {
        solicitarNombreUsuario();
    }

    // Oculta la sección de inicio
    document.getElementById("inicio-container").style.display = "none";
     
    generarTeclado();
    // Muestra la sección del juego
    document.getElementById("ahorcado-container").style.display = "block";

    // Inicializa la interfaz del juego
    actualizarInterfaz();
}
function mostrarInstrucciones() {
    // Muestra la sección de instrucciones
    document.getElementById("instrucciones").style.display = "block";

}



// Actualiza la interfaz del juego
function actualizarInterfaz() {
    document.getElementById("palabra").textContent = palabraEnProceso;
    document.getElementById("numIntentos").textContent = intentosRestantes;

    // Actualiza el dibujo del ahorcado
    document.getElementById("ahorcado-dibujo").innerHTML = `<img src="img/${maxIntentos - intentosRestantes}.png" alt="">`;

    guardarEnLocalStorage();
}

function adivinarLetra(letra) {

    letra = letra.toLowerCase();
    // Verifica si la letra está en la palabra
    let letraAdivinada = false;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i].toLowerCase() === letra) {
            palabraEnProceso = palabraEnProceso.substr(0, i * 1) + letra + palabraEnProceso.substr(i * 1 + 1);
            letraAdivinada = true;
        }
        console.log("palabraEnProceso:", palabraEnProceso);
        console.log("palabraSecreta:", palabraSecreta);
    }

    // Si la letra no está en la palabra, resta el número de intentos
    if (!letraAdivinada) {
        intentosRestantes--;

        // Verifica si se ha perdido el juego
        if (intentosRestantes === 0) {
            mostrarVentanaFinal(false);
            return;
        }
    }



    // Verifica si se ha ganado el juego
if (palabraEnProceso.toLowerCase() === palabraSecreta.toLowerCase()) {
    setTimeout(() => {
        mostrarVentanaFinal(true);
        return;
    }, 500);
    return;
}


    // Actualiza la interfaz del juego
    actualizarInterfaz();
}


function reiniciarJuego() {
    
    limpiarLocalStorage();
    // Selecciona una nueva categoría al azar
    const categoriaSeleccionada = categorias[Math.floor(Math.random() * categorias.length)];

    // Selecciona una nueva palabra al azar de la categoría seleccionada
    const categoriaActual = animales[categoriaSeleccionada];
    const palabrasCategoria = categoriaActual.palabras;
    const palabraSeleccionada = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];

   
    palabraSecreta = palabraSeleccionada.nombre;
    //pista.textContent = "Pista: " + palabraSeleccionada.pista;

    const pista = document.getElementById("pista");
    const categoria = document.getElementById("categoria");

    pista.innerHTML = `<i class="fas fa-question-circle"></i> Pista: ${palabraSeleccionada.pista}`;
    categoria.textContent = "Categoria: " + categoriaActual.categoria;
    
    // Máscara para la nueva palabra
    palabraEnProceso = palabraSecreta.split('').map(letra => (letra === ' ' ? ' ' : '_')).join('').toLowerCase();

    // Reinicia el número de intentos
    intentosRestantes = maxIntentos;

    // Mostrar todos los botones del teclado
    const botonesLetras = document.querySelectorAll(".letra");
    botonesLetras.forEach(boton => (boton.style.display = "block"));  

    // Actualiza la interfaz del juego
    actualizarInterfaz();
}

function generarTeclado() {
    // Caracteres del teclado
    const letras = "abcdefghijklmnopqrstuvwxyz";

    // Contenedor del teclado
    const tecladoContainer = document.getElementById("teclado");

    // Botón para cada letra y se añade al contenedor
    for (let letra of letras) {
        const botonLetra = document.createElement("button");
        botonLetra.classList.add("letra");
        botonLetra.textContent = letra.toUpperCase(); // Mostrar letras en mayúsculas
        botonLetra.addEventListener("click", function() {
            botonLetra.style.display="none";
            adivinarLetra(letra);
        });
        tecladoContainer.appendChild(botonLetra);
    }
}



// Inicializa la interfaz del juego
actualizarInterfaz();
