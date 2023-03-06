import dotenv from 'dotenv';
dotenv.config();

export const PROJECT_MODE = process.env.PROJECT_MODE;

export const SERVER_HOST = process.env.SERVER_HOST || "http://localhost";

export const SERVER_PORT = process.env.SERVER_PORT || 3000;

export const DB_PORT = process.env.DB_PORT;

export const DB_USER = process.env.DB_USER;

export const DB_PASSWORD = process.env.DB_PASSWORD;

export const DB_NAME = process.env.DB_NAME;

export const DB_HOST = process.env.DB_HOST;

export const SENDGRIDSERVICE = process.env.SENDGRIDSERVICE;

export const MAILGUNSERVICE = process.env.MAILGUNSERVICE;

export const MAILGUNDOMAIN = process.env.MAILGUNDOMAIN;

export const SECRET_JWT = process.env.SECRET_JWT

export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";


