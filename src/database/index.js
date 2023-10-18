// import debug
import debug from 'debug';
// import sequelize
import { Sequelize } from 'sequelize';
// Import Config
import Config from '../config/index.js';

const logger = debug('app:module-sequelize');
const sequelize = new Sequelize(
  Config.DB_NAME,
  Config.DB_USER,
  Config.DB_PASS,
  {
    host: Config.DB_HOST,
    dialect: 'mysql',
  }
);

const ConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    logger(`*** MYSQL_CONNECT_SUCCESFULL ***`);
  } catch (e) {
    logger(e);
    logger(`*** MYSQL_ERROR_CONNECTION ***`);
  }
};

export { sequelize, ConnectMysql };
