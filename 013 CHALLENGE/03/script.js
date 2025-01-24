const peliculas = [
    { titulo: "El Rey León", genero: "Animación" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Titanic", genero: "Romance" },
    { titulo: "El Conjuro", genero: "Terror" },
    { titulo: "Shrek", genero: "Animación" },
    { titulo: "John Wick", genero: "Acción" },
    { titulo: "El viaje de Chihiro", genero: "Fantasía" },
    { titulo: "Akira", genero: "Ciencia ficción" },
    { titulo: "Your Name", genero: "Romance" },
    { titulo: "Ghost in the Shell", genero: "Ciencia ficción" },
    { titulo: "Perfect Blue", genero: "Thriller psicológico" },
    { titulo: "La princesa Mononoke", genero: "Fantasía" },
    { titulo: "Mi vecino Totoro", genero: "Fantasía" },
    { titulo: "El castillo ambulante", genero: "Fantasía" },
    { titulo: "La tumba de las luciérnagas", genero: "Drama" },
    { titulo: "A Silent Voice", genero: "Drama" },
    { titulo: "Weathering with You", genero: "Romance" },
    { titulo: "5 centímetros por segundo", genero: "Romance" },
    { titulo: "Paprika", genero: "Thriller psicológico" },
    { titulo: "Summer Wars", genero: "Ciencia ficción" },
    { titulo: "El cuento de la princesa Kaguya", genero: "Fantasía" },
    { titulo: "Redline", genero: "Acción" },
    { titulo: "Vampire Hunter D: Bloodlust", genero: "Horror" },
    { titulo: "Cowboy Bebop: The Movie", genero: "Acción" },
    { titulo: "Kiki: Entregas a domicilio", genero: "Fantasía" },
    { titulo: "Porco Rosso", genero: "Aventura" },
    { titulo: "Jin-Roh: The Wolf Brigade", genero: "Thriller" },
    { titulo: "Wolf Children", genero: "Drama" },
    { titulo: "Sword of the Stranger", genero: "Acción" },
    { titulo: "Promare", genero: "Acción" }
];


// Referencias al DOM
const listadoPeliculas = document.getElementById("peliculas");
const generoSelect = document.getElementById("genero");
const accesosRapidos = document.getElementById("accesos-rapidos");

// Inicializar la página
function inicializar() {
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