
const peliculas = [
    { titulo: "El Rey León", genero: "Animación", anio: 1994 },
    { titulo: "Inception", genero: "Ciencia Ficción", anio: 2010 },
    { titulo: "Titanic", genero: "Drama", anio: 1997 },
    { titulo: "Matrix", genero: "Acción", anio: 1999 }
];

const botonMostrar = document.getElementById("mostrarPeliculas");
const listaPeliculas = document.getElementById("listaPeliculas");

// Función para pintar las películas en el DOM
function pintarPeliculas() {
    listaPeliculas.innerHTML = ""; 
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        const li = document.createElement("li");
        li.textContent = `${pelicula.titulo} - ${pelicula.genero} (${pelicula.anio})`;
        listaPeliculas.appendChild(li);
    }
}

botonMostrar.addEventListener("click", pintarPeliculas);





const nombreGenero = document.getElementById("nombreGenero");
function pintarPeliculaDrama() {
    listaPeliculas.innerHTML = "";
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        if (pelicula.genero === "Drama") {
            const li = document.createElement("li");
            li.textContent = `${pelicula.titulo} - ${pelicula.genero} (${pelicula.anio})`;
            listaPeliculas.appendChild(li);
        }
    }
}

nombreGenero.addEventListener("click", pintarPeliculaDrama);