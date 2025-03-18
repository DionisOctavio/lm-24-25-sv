const express = require("express"); 
const { Pool } = require("pg"); 
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1",
    port: 5432,
    // NO USAMOS SSL EN LOCALHOST
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const result = await pool.query('SELECT * FROM usuario WHERE usuario = $1 AND contrasenia = $2', [username, password]);
      if (result.rows.length > 0) {
          const user = result.rows[0]; 
          return res.json({
              message: 'Login exitoso',
              user: { id: user.id_usuario, usuario: user.usuario }
          });
      } else {
          return res.status(401).json({ message: 'Credenciales incorrectas' });
      }
  } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error en el servidor' });
  }
});


app.get("/peliculas", async (req, res) => {
    const { rows } = await pool.query(
        `SELECT * FROM pelicula`
    );
    res.json(rows);
});

app.post('/favoritos/:id_usuario/:id_pelicula', async (req, res) => {
  const { id_usuario, id_pelicula } = req.params;
  if (!id_usuario || !id_pelicula) {
      return res.status(400).json({ message: 'Datos incompletos' });
  }

  try {
      await pool.query(
          `INSERT INTO favorito (id_usuario, id_pelicula)
          VALUES ($1, $2)`,
          [id_usuario, id_pelicula]
      );
      res.status(201).send(); 

  } catch (error) {
      console.error('Error al agregar el favorito:', error);
      res.status(500).json({ message: 'Error en el servidor' });
  }
});


app.get('/favoritos/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;
  
  if (!id_usuario) {
    return res.status(400).json({ message: 'ID de usuario no proporcionado' });
  }

  try {
    const result = await pool.query(
      `SELECT f.id_favorito, p.titulo AS pelicula
       FROM favorito f
       JOIN pelicula p ON f.id_pelicula = p.id_pelicula
       WHERE f.id_usuario = $1`, 
      [id_usuario]
    );
    
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.json([]);
    }

  } catch (error) {
    console.error('Error al obtener los favoritos:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});
