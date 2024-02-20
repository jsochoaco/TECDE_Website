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
  credentials: true, // Habilitar credenciales en las solicitudes (si es necesario)
  optionsSuccessStatus: 204, // Algunos navegadores pueden requerir esto para gestionar correctamente las solicitudes OPTIONS.
};
server.use(cors(corsOptions));
// Middleware para verificar la API key en parámetros de consulta
// const apiKeyMiddleware = (req, res, next) => {
//     const apiKey = req.headers.authorization;
//     const apiHash = TOKEN_API 
//     if (apiKey && apiKey === apiHash) {
//       next();
//     } else {
//       res.status(401).json({ error: 'Acceso no autorizado' });
//     }
// };
// server.use('security/G4xYHYKzB7OrzqYH5yYvl5UxpId22gPf', (req, res, next) => {
//   next();
// });
server.use(apiKeyMiddleware); // Aplicar middleware antes de las rutas
server.use(routers); // Módulo de rutas importado para manejar las rutas y las solicitudes en la aplicación.

module.exports = server; // Exportamos la instancia de la aplicación