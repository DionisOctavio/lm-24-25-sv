function cargarPeliculas() {
    fetch("./peliculas.json") // Ruta del archivo JSON
        .then(response => {
            return response.json();
        })
        .then(data => {
            peliculas = data; // Asignar los datos cargados a la variable
            cargarGeneros();
            generarBotonesAcceso();
            mostrarPeliculas(peliculas); // Mostrar todas las películas al cargar
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


// Referencias al DOM
const listadoPeliculas = document.getElementById("peliculas");
const generoSelect = document.getElementById("genero");
const accesosRapidos = document.getElementById("accesos-rapidos");

// Inicializar la página
function inicializar() {
    cargarPeliculas();
    cargarGeneros();
    mostrarPeliculas(peliculas);
    generarBotonesAcceso();
}

// Cargar géneros en el desplegable
function cargarGeneros() {
    const generos = [...new Set(peliculas.map(p => p.genero))];
    generos.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        generoSelect.appendChild(option);
    });

    generoSelect.addEventListener("change", filtrarPeliculas);
}

// Generar botones de acceso rápido
function generarBotonesAcceso() {
    const generos = [...new Set(peliculas.map(p => p.genero))];
    generos.forEach(genero => {
        const button = document.createElement("button");
        button.textContent = genero;
        button.addEventListener("click", () => filtrarPeliculasPorGenero(genero));
        accesosRapidos.appendChild(button);
    });
}

// Mostrar películas en la página
function mostrarPeliculas(lista) {
    listadoPeliculas.innerHTML = "";
    lista.forEach(pelicula => {
        const li = document.createElement("li");
        li.textContent = `${pelicula.titulo} - ${pelicula.genero}`;
        listadoPeliculas.appendChild(li);
    });
}

// Filtrar películas por género desde el desplegable
function filtrarPeliculas() {
    const generoSeleccionado = generoSelect.value;
    if (generoSeleccionado === "todos") {
        mostrarPeliculas(peliculas);
    } else {
        const filtradas = peliculas.filter(p => p.genero === generoSeleccionado);
        mostrarPeliculas(filtradas);
    }
}

// Filtrar películas por género usando botones
function filtrarPeliculasPorGenero(genero) {
    const filtradas = peliculas.filter(p => p.genero === genero);
    mostrarPeliculas(filtradas);
}

// Inicializar la aplicación
inicializar();