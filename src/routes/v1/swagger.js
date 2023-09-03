// Import swagger
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
// Importor Config
import Config from "../../config/index.js";
// Import path
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Metadata info About our API
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Categories API-REST",
      description:
        "This is an example of a Category API-REST Server based on the OpenAPI 3.0 specification. ",
      contact: {
        name: "Miguel Abache",
        url: "https://github.com/Ab4ch3/API-Categories.git",
        email: "miiguel.abache@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${Config.PORT}/api/v1`,
      },
    ],
  },

  apis: [
    `${path.join(__dirname, "./*.js")}`,
    "./src/models/categoriesModel.js",
  ], // files containing annotations as above
};

// Docs en JsonFormat
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Function to setup out docs
const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${Config.PORT}/api/v1/docs`
  );
};

export default swaggerDocs;
