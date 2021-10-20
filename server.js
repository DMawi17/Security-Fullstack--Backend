import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./express.js";

const { connect, connection } = mongoose;

connect(config.mongoUri);

connection.on("connected", () => console.info("DB Connection Successful!"));

connection.on("error", () =>
    console.info(`Unable to connect to the database!`)
);

app.listen(config.port, (e) =>
    e
        ? console.log(`NOT listening.. ${e}`)
        : console.info("Server started on port %s.", config.port)
);
