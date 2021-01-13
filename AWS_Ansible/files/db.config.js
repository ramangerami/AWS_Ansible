module.exports = {
    HOST: "localhost",
    USER: "node_app",
    PASSWORD: "password",
    DB: "assignment_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };