import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DOMAIN = process.env.DOMAIN || 'http://localhost';
export const NOMBRE = process.env.NOMBRE || "Mundo"
export const DB_PASS = process.env.DB_PASS || "1234";
export const DB_USER = process.env.DB_USER || "usuario";
export const DATABASE= process.env.DATABASE || "base_de_datos";
export const CLUSTER = process.env.CLUSTER || "server.mongoDB";

export const FULLDOMAIN = `${DOMAIN}:${PORT}`;
