const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routers = require("./routes"); // Asegúrate de que la ruta a tus rutas sea correcta.
const server = express();
const bcrypt = require('bcryptjs');
require("dotenv").config(); //Dependencia para leer archivo .env
const { TOKEN_API } = process.env;
//===MIDDLEWARES
server.use(morgan("dev")); // Morgan con el formato "dev" para registrar las solicitudes en la consola.
server.use(express.json()); // Express para analizar las solicitudes entrantes con formato JSON.
const corsOptions = {
  origin: ["https://tecde.co", "http://localhost:3000", "http://localhost:3001", "https://api.tecde.co"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204, 
};
server.use(cors(corsOptions));
server.use(routers);

module.exports = server;