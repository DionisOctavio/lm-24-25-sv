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
