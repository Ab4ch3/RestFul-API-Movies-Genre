// Import Express
import express from 'express';
// Import Cors
import cors from 'cors';
// Import morgan
import morgan from 'morgan';
// Import config
import Config from './config/index.js';
// Import conexion database
import { ConnectMysql } from './database/index.js';
// import Route-V1
import v1Router from './routes/v1/index.js';
// Import Debug
import debug from 'debug';
const logger = debug('app:module-app');
// Import Swagger
import swaggerDocs from './routes/v1/swagger.js';
// Import Path
//we can use dirname and filename
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Start Express
const app = express();

// Morgan
app.use(morgan('dev'));

// Cors
app.use(cors());

// Enable receive json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//we indicate to express which is the path to public files
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Invoke Routes
 */
app.use(v1Router);

/**
 * Enabled Server Listen
 */
app.listen(Config.PORT, () => {
  logger(`*** SERVER_LISTENING_ON_PORT ${Config.HOST}:${Config.PORT} ***`);
  swaggerDocs(app, Config.PORT);
});

ConnectMysql();
