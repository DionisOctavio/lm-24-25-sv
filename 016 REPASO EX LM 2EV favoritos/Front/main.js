const API_URL = "http://localhost:3000";
const GET_PELICULAS = API_URL + "/peliculas";
const ADD_FAVORITO = API_URL + "/favoritos"; 

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
            <button class="btn-favorito" data-id="${pelicula.id_pelicula}">+</button>
        `;

        const btnFavorito = peliculaDiv.querySelector(".btn-favorito");
        btnFavorito.addEventListener("click", () => agregarAFavoritos(pelicula.id_pelicula));

        cuerpo.appendChild(peliculaDiv);
    });
}
function agregarAFavoritos(idPelicula) {
    const idUsuario = localStorage.getItem('id_usuario');
    
    if (!idUsuario) {
        alert("Debes iniciar sesión para agregar favoritos.");
        return;
    }
    
    const url = `http://localhost:3000/favoritos/${idUsuario}/${idPelicula}`;
    console.log("ID Usuario:", idUsuario, "ID Película:", idPelicula);

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Película añadida a tus favoritos.");
        } else {
            alert("Error al añadir a favoritos.");
        }
    })
    .catch(error => {
        console.error("Error al agregar favorito:", error);
        alert("Ocurrió un error al intentar añadir la película a favoritos.");
    });
}

function obtenerFavoritos() {
    const idUsuario = localStorage.getItem('id_usuario');
    
    if (!idUsuario) {
        alert("Debes iniciar sesión para ver tus favoritos.");
        return;
    }

    // Hacer la solicitud GET para obtener los favoritos
    fetch(`http://localhost:3000/favoritos/${idUsuario}`)
        .then(response => response.json())
        .then(favoritos => {
            const favoritosDiv = document.getElementById('favoritos');
            
            if (favoritos.length === 0) {
                favoritosDiv.innerHTML = 'No tienes favoritos.';
            } else {
                let tableHTML = `
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID Favorito</th>
                                <th>Película</th>
                            </tr>
                        </thead>
                        <tbody>
                `;
                favoritos.forEach(fav => {
                    tableHTML += `
                        <tr>
                            <td>${fav.id_favorito}</td>
                            <td>${fav.pelicula}</td>
                        </tr>
                    `;
                });
                tableHTML += `
                        </tbody>
                    </table>
                `;
                favoritosDiv.innerHTML = tableHTML;
            }
        })
        .catch(error => {
            console.error('Error al obtener los favoritos:', error);
            alert('Ocurrió un error al intentar cargar tus favoritos.');
        });
}



cargarPeliculas();
