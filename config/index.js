require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
};
