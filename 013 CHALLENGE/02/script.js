// Referencias a elementos del DOM
const contenedorPeliculas = document.getElementById('contenedor-peliculas');
const contenedorTitulos = document.getElementById('contenedor-titulos');
const botonMostrarTitulos = document.getElementById('mostrar-titulos');
const contenedorGeneros = document.getElementById('contenedor-generos');
const botonMostrarAnimacion = document.getElementById('mostrarAnimacion');
const botonMonstrarCienciaFiccion = document.getElementById('mostrarCienciaFiccion');
const botonMostrarAccion = document.getElementById('mostrarAccion');
const botonMostrarAnime = document.getElementById('mostrarAnime');

// Cargar el JSON y mostrar las películas
fetch('peliculas.json')
  .then((response) => response.json())
  .then((data) => {
    // Guardar el JSON en una variable global para reutilizar
    window.peliculas = data;

    // Mostrar todas las películas
    let htmlContent = '';
    for (let i = 0; i < data.length; i++) {
      htmlContent += `<p><strong>${data[i].titulo}</strong> - Año: ${data[i].año}, Género: ${data[i].genero}</p>`;
    }
    contenedorPeliculas.innerHTML = htmlContent;
  });

// Mostrar solo los títulos de las películas
botonMostrarTitulos.addEventListener('click', () => {
  if (!window.peliculas) return;

  let htmlContent = '';
  for (let i = 0; i < window.peliculas.length; i++) {
    htmlContent += `<p>${window.peliculas[i].titulo}</p>`;
  }
  contenedorTitulos.innerHTML = htmlContent;
});

function mostrarGenero(){
    const genero = prompt("Ingrese el genero de la pelicula");

    let htmlContent = '';
    for (let i = 0; i < window.peliculas.length; i++) {
        if(window.peliculas[i].genero === genero){
            htmlContent += `<p><strong>${window.peliculas[i].titulo}</strong> - Año: ${window.peliculas[i].año}, Género: ${window.peliculas[i].genero}</p>`;
        }
    }
    contenedorGeneros.innerHTML = htmlContent;
}


function mostrarAnimacion(){
    let htmlContent = '';
    for (let i = 0; i < window.peliculas.length; i++) {
        if(window.peliculas[i].genero === "Animación"){
            htmlContent += `<p><strong>${window.peliculas[i].titulo}</strong> - Año: ${window.peliculas[i].año}, Género: ${window.peliculas[i].genero}</p>`;
        }
    }
    contenedorGeneros.innerHTML = htmlContent;    
}

function mostrarCienciaFiccion(){
    let htmlContent = '';
    for (let i = 0; i < window.peliculas.length; i++) {
        if(window.peliculas[i].genero === "Ciencia Ficcion"){
            htmlContent += `<p><strong>${window.peliculas[i].titulo}</strong> - Año: ${window.peliculas[i].año}, Género: ${window.peliculas[i].genero}</p>`;
        }
    }
    contenedorGeneros.innerHTML = htmlContent;    
}

function mostrarAccion(){
    let htmlContent = '';
    for (let i = 0; i < window.peliculas.length; i++) {        
        if(window.peliculas[i].genero === "Acción"){
            htmlContent += `<p><strong>${window.peliculas[i].titulo}</strong> - Año: ${window.peliculas[i].año}, Género: ${window.peliculas[i].genero}</p>`;
        }
    }
    contenedorGeneros.innerHTML = htmlContent;    
}

function mostrarAnime(){
    let htmlContent = '';
    for (let i = 0; i < window.peliculas.length; i++) {        
        if(window.peliculas[i].genero === "Anime"){
            htmlContent += `<p><strong>${window.peliculas[i].titulo}</strong> - Año: ${window.peliculas[i].año}, Género: ${window.peliculas[i].genero}</p>`;
        }
    }
    contenedorGeneros.innerHTML = htmlContent;
}