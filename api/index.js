const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./config/database");
const cors = require("cors");

//Servidor de express
const app = express();

//Base de datos
dbConnection();

//Cors

app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Parseo del body

app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/publicaciones", require("./routes/publicaciones"));

//Peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
