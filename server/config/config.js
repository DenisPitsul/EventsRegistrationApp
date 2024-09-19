module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {},
  production: {},
};