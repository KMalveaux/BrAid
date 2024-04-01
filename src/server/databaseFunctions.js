const createNewAccount = require("./createNewAccount");
const loginUser = require("./loginUser");
const { Sequelize, Model, DataTypes } = require("sequelize");

// Gets the database file or creates it if it is not found
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testDatabaseConnection();

const UserModel = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

sequelize
  .sync()
  .then(async () => {
    console.log("Database synced successfully");
    createNewAccount(UserModel, "testUser1", "123");
    loginUser(UserModel, "testUser1", "123");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// ============== Listed Below are some useful methods to know ==============

// await User.sync({ force: true });
// console.log("The table for the User model was just (re)created!");

// await User.drop();
// console.log("User table dropped!");

// await sequelize.drop();
// console.log("All tables dropped!");

// sequelize.close()
