// Import swagger
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';
// Importor Config
// Import Debug
import debug from 'debug';
// Import path
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Config from '../../config/index.js';

const logger = debug('app:module-swagger');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Metadata info About our API
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Categories API-REST',
      description:
        'Category API-REST Server based on the OpenAPI 3.0 specification.</br> </br> Some useful links: </br> - [Category Films repository](https://github.com/Ab4ch3/API-Categories.git) ',
      termsOfService: ' http://swagger.io/terms/',
      contact: {
        name: 'Miguel Abache',
        url: 'https://github.com/Ab4ch3/API-Categories.git',
        email: 'miiguel.abache@gmail.com'
      },
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/'
      },
      version: '1.1.0'
    },
    servers: [
      {
        url: `${Config.HOST}:${Config.PORT}/api/v1`
      }
    ],
    components: {
      // Esto se usa cuando tenemos Apis Protegidas
      /*  securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer'
        }
      }, */
      schemas: {
        /* Aca Definimos cada uno de los esquemas que tenemos */
        category: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            name: {
              type: 'string',
              example: 'Tommy V'
            },
            description: {
              type: 'string',
              example: 'About Tommy V'
            },
            createdAt: {
              type: 'string',
              example: '4/20/2022, 2:21:56'
            },
            updatedAt: {
              type: 'string',
              example: '4/20/2022, 2:21:56'
            }
          }
        }
      }
    }
  },
  apis: [
    `${path.join(__dirname, './*.js')}` // En caso de que tengamos archivos indivuales por cada ruta
  ] // files containing annotations as above
};

// Docs en JsonFormat
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Function to setup out docs
const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  logger(
    `***  Version 1 Docs are available on ${Config.HOST}:${Config.PORT}/api/v1/docs ***`
  );
};

export default swaggerDocs;
