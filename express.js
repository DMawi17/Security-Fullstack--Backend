import express from "express";
import cors from "cors";
import usrRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`\n[ ${req.method} ] REQUEST ON ROUTE [ ${req.path} ]`);
    next();
});

app.use("/", usrRoutes);

export default app;
