const API_URL = "http://localhost:3000/peliculas";

const GET_PELICULAS = "/peliculas";
const GET_PELICULAS_BY_GENNERO = API_URL + "";
const GET_PELICULAS_FABORITAS = API_URL + "";
const GET_USUARIOS = API_URL + "";

function getPeliculas(){

    alert("Paso1");

    /*fetch()
        .then(response => response.json())
        .then(
            (data) => {}
        )
        .catch();*/

        fetch(GET_PELICULAS)
        .then(response => response.json())
        .then(
            (data) => {
                let idPelicula = data[0].id
                let tituloPelicula = data[0].titulo

                const titulo = document.getElementById("titulo");
                titulo.textContent = tituloPelicula;
            }
        )
        .catch();


}