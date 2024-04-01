require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRE_USERNAME,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    host: process.env.POSTGRE_HOST,
    port: process.env.POSTGRE_PORT,
    dialect: process.env.DB_DIALECT
  }
}