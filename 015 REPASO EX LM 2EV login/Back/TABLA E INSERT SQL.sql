CREATE TABLE usuario(
id_usuario SERIAL,
usuario VARCHAR(50),
contrasenia VARCHAR(150),
CONSTRAINT PK_USUARIO PRIMARY KEY (id_usuario)
);

CREATE TABLE genero(
id_genero SERIAL,
nombre_genero VARCHAR(50),
CONSTRAINT PK_GENERO PRIMARY KEY (id_genero)
);

CREATE TABLE pelicula(
id_pelicula SERIAL,
titulo VARCHAR(100) NOT NULL,
director VARCHAR(100),
anio INT,
id_genero INT,
CONSTRAINT PK_PELICULA PRIMARY KEY (id_pelicula),
CONSTRAINT CK_TITULO CHECK (titulo IS NOT NULL),
CONSTRAINT CK_DIRECTOR CHECK (director IS NOT NULL),
CONSTRAINT CK_ANIO CHECK (anio IS NOT NULL),
CONSTRAINT FK_GENERO FOREIGN KEY (id_genero) REFERENCES genero (id_genero)
);

CREATE TABLE favorito(
id_favorito SERIAL,
id_usuario INT,
id_pelicula INT,
CONSTRAINT PK_FAVORITO PRIMARY KEY (id_favorito, id_usuario, id_pelicula),
CONSTRAINT FK_USUARIO FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
CONSTRAINT FK_PELICULA FOREIGN KEY (id_pelicula) REFERENCES pelicula (id_pelicula)
);






INSERT INTO usuario (usuario, contrasenia) VALUES ('octavio', '1234');


INSERT INTO genero (nombre_genero) VALUES
('Drama'),
('Ciencia Ficción'),
('Musical'),
('Acción');


INSERT INTO pelicula (titulo, director, anio, id_genero) VALUES
('Forrest Gump', 'Robert Zemeckis', 1994, 1),
('Inception', 'Christopher Nolan', 2010, 2),
('La La Land', 'Damien Chazelle', 2016, 3),
('The Shawshank Redemption', 'Frank Darabont', 1994, 1),
('The Matrix', 'The Wachowskis', 1999, 2),
('Fight Club', 'David Fincher', 1999, 1),
('The Godfather: Part II', 'Francis Ford Coppola', 1974, 1),
('Interstellar', 'Christopher Nolan', 2014, 2),
('Gladiator', 'Ridley Scott', 2000, 4),
('The Dark Knight Rises', 'Christopher Nolan', 2012, 4);





SELECT * FROM pelicula;