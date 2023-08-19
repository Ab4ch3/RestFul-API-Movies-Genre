import dotenv from "dotenv";
dotenv.config();

const Config = {
  PORT: process.env.PORT || 3000,
};

export default Config;
