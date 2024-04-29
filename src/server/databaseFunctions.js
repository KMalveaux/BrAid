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

const SurveyModel = sequelize.define(
  "SurveyResults",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer2: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer3: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer4: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer5: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer6: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer7: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer8: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer9: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer10: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer11: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer12: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer13: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer14: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer15: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer16: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer17: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer18: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer19: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {}
);

sequelize
  .sync()
  .then(async () => {
    console.log("Database synced successfully");
    // createNewAccount(UserModel, "testUser1", "123");
    // loginUser(UserModel, "testUser1", "123");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

const createSurveyResultsTable = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("SurveyResults table created successfully.");
  } catch (error) {
    console.error("Error creating SurveyResults table:", error);
  }
};

createSurveyResultsTable();

// ============== Listed Below are some useful methods to know ==============

// await User.sync({ force: true });
// console.log("The table for the User model was just (re)created!");

// await User.drop();
// console.log("User table dropped!");

// await sequelize.drop();
// console.log("All tables dropped!");

// sequelize.close()
