import dotenv from 'dotenv';

dotenv.config();

const Config = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  SLACK_WEBHOOK: process.env.SLACK_WEBHOOK
};

export default Config;
