//Es el archivo central de nuestro backend


import { Router } from "express";

import { createCompra, getCompraByUserId, getAllCompras, updateCompra } from "../controllers/compras.controller.js";

import { createProducto, deleteProducto, getProductoByUserId, getAllProductos, updateProducto } from "../controllers/productos.controller.js";

import { createUsuario, deleteUsuario, getUsuarioById, getAllUsuarios, updateUsuario } from "../controllers/usuarios.controller.js";


// RUtas de mi API:
// --- routes/index.routes.js --- //
const router = Router();
router.get("/", (req, res, next) => {
    res.json({ message: "Bienvenidos a nuestra API v1"});
})

router.get("/users", (req, res, next) => {
    res.json({ message: "Ruta para obtener usuarios"});
})
// --- routes/index.routes.js --- //


// Listas para Admin:
router.get("/usuarios", getAllUsuarios); 
router.get("/productos", getAllProductos); 
router.get("/compras", getAllCompras); 


// Crear items:
router.post("/usuarios", createUsuario); //Registrarse 
router.post("/usuarios/:uid/productos", createProducto); //Poner a la venta
router.post("/usuarios/:uid/compras", createCompra); //Comprar un producto

// Obtener información por ID: 
router.get("/usuarios/:uid", getUsuarioById);
router.get("/usuarios/:uid/productos-en-venta", getProductoByUserId);
router.get("/usuarios/:uid/productos-comprados", getCompraByUserId); 

// Actualizar elementos:
router.put("/usuarios/:uid", updateUsuario); //Update
router.put("/productos/:pid", updateProducto); //Update
router.put("/ussuarios/:uid/compras/:id", updateCompra); //Update


// Eliminar elementos:
router.delete("/usuarios/:uid", deleteUsuario); 
router.delete("/productos/:pid", deleteProducto); 

export default router;