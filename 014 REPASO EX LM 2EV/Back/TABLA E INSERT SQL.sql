CREATE TABLE pelicula(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    director VARCHAR(100),
    anio INT,
    genero VARCHAR(50)
);

INSERT INTO pelicula (titulo, director, anio, genero) VALUES
('El Padrino', 'Francis Ford Coppola', 1972, 'Drama'),
('El Caballero Oscuro', 'Christopher Nolan', 2008, 'Acción'),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crimen'),
('La Lista de Schindler', 'Steven Spielberg', 1993, 'Historia');

SELECT * FROM pelicula;