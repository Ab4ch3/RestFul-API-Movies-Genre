// Importamos el Sequelize , del archivo databases
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

// import DataTypes

/**
 * Definir Model Categories
 * Definimos schema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tommy V
 *         description:
 *           type: string
 *           example: For Time
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56
 *       required:
 *          - name
 *          - description
 *
 */
const Category = sequelize.define(
  'categories', // Sera el nombre de la tabla que se apuntara
  {
    name: {
      type: DataTypes.STRING, // Definimos el tipo que sera el campo
      allowNull: false // Si acepta nulos
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Definimos que usaremos createdAt y updatedAt
    timestamps: true
  }
);

export default Category;
