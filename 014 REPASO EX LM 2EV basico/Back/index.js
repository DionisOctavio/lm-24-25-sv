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

app.get("/peliculas", async (req, res) => {
    const { rows } = await pool.query(
        `SELECT * FROM pelicula`
    );
    res.json(rows);
});