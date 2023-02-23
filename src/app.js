import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/users.routes";
import authRoutes from "./routes/auth.routes";
import emailRoutes from "./routes/email.routes"

const app = express();


app.use(morgan('dev'));
app.use(express.json())


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes)

export default app;