import { Sequelize } from "sequelize";

const db = new Sequelize("rentall", "root", "siki12345", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
