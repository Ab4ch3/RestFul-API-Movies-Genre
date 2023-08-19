// Import Express
import express from "express";
// Import Cors
import cors from "cors";
// Import morgan
import morgan from "morgan";
// Import config
import Config from "./config/index.js";
// Import Debug
import debug from "debug";
const logger = debug("app:module-app");

// Start Express
const app = express();

// Morgan
app.use(morgan("dev"));

// Cors
app.use(cors());

// Enable receive json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(Config.PORT, () => {
  logger(`### SERVER_LISTENING_ON_PORT ${Config.PORT} ###`);
});
