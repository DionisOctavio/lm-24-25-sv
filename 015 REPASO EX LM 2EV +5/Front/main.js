const API_URL = "http://localhost:3000";
const GET_PELICULAS = API_URL + "/peliculas";

function cargarPeliculas() {
    fetch(GET_PELICULAS)
        .then(response => response.json())
        .then(peliculas => {
            peliculasGuardadas = peliculas;
            mostrarPeliculas(peliculas);
        })
        .catch(error => console.error("Error al obtener las películas:", error));
}

function mostrarPeliculas(peliculas) {
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = ""; 
    cuerpo.classList.add("peliculas-container"); 

    peliculas.forEach(pelicula => {
        const peliculaDiv = document.createElement("div");
        peliculaDiv.classList.add("pelicula");

        peliculaDiv.innerHTML = `
            <h3>${pelicula.titulo}</h3>
            <p><strong>Año:</strong> ${pelicula.anio} | <strong>Género:</strong> ${pelicula.genero}</p>
            <hr>
        `;

        cuerpo.appendChild(peliculaDiv);
    });
}

cargarPeliculas();