import express from "express";
import cors from "cors";
import usrRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    next();
    console.info(`${req.method} Request on ${req.path}`);
});

app.use("/", usrRoutes);

export default app;
