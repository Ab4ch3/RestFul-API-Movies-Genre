// import DataTypes
import { DataTypes } from 'sequelize';
// Importamos el Sequelize , del archivo databases
import { sequelize } from '../database/index.js';

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
