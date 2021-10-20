import express from "express";
import cors from "cors";
import usrRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    next();
    console.info(`${req.method} Request on ${req.path}`);
});

app.use("/", usrRoutes);
app.use("/", authRoutes);

export default app;
