import express from 'express';
import router from './routes/index.routes.js';
import { PORT, DOMAIN, FULLDOMAIN, NOMBRE } from './config/config.js';
import {conectarDB} from './db/mongoose.js'

import { notFoundHandler, errorHandler } from './middlewares/errors.js';
import cors from 'cors';

const app = express();

//Permite acceso desde cualquier servidor
app.use(cors());

//Limpiar terminal en cada reinicio de proyecto
console.clear();

//Middlewares:
app.use(express.json()); //leer datos que vienen en el body de mi request
app.use(express.urlencoded({extended: false}));

// LLamar a función de conexión
conectarDB();

// Contenido estático: (hay que replicarlo en vercel)
// app.use("origen", express.static)
app.use("/uploads", express.static('public/uploads'));
app.use("/web", express.static('public') );

//Rutas del front:
app.get("/", (req, res, next) => {
    res.setHeader("Content-Type", "text/html");

    const landingHtml = `
        <h1>Hola ${NOMBRE}</h1>
        <h1>Bienvenidos a nuestro backend en Express</h1>
    `;
    res.send(landingHtml);  
})

// Rutas de nuestro API
app.use("/api/v1/", router);

// Middleware de errores:
app.use(notFoundHandler);
app.use(errorHandler)


app.listen(3000, ()=> {
    console.log(`Servidor funcionando en ${HOST}:${PORT}`);
})