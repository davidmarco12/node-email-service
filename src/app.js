import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/users.routes";
import authRoutes from "./routes/auth.routes";
import emailRoutes from "./routes/email.routes"

//swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./libs/swagger.config";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const specs = swaggerJsDoc(options);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;