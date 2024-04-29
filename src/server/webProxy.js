const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8080;

// Secret key for JWT signing (should be securely stored)
const secretKey = "your_secret_key";

app.use(cors());
app.use(express.json());

const createNewAccount = require("./createNewAccount");
const loginUser = require("./loginUser");
const saveSurveyResults = require("./saveSurveyResults");
const getSurveyResults = require("./getSurveyResults");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
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

app.get("/", (req, res) => {
  res.send("This is the default request!!!");
});

/**
 *  This will handle placing newely created users into the database.
 *  The database shall enforce unique usernames, therefore there will
 *  be a check to see if a given username already exists.
 */
app.post("/createUser", async (req, res) => {
  try {
    const result = await createNewAccount(
      UserModel,
      req.body.username,
      req.body.passwordHash
    );
    if (result === 1) {
      res.status(200).json({ message: "Your profile has been created!" });
    } else if (result === 2) {
      res.status(401).json({ message: "Username already in use!" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send();
  }
});

/**
 * Endpoint for user login
 */
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userData = await loginUser(UserModel, username, password);

  if (!userData || Object.keys(userData).length == 0) {
    return res.status(401).json({ message: "Invalid username or password" });
  } else {
    const token = jwt.sign(userData, secretKey, { expiresIn: "1h" });

    res
      .status(200)
      .json({ message: "Successfully Signed In!", token, userData });
  }
});

app.post("/saveSurveyResults", async (req, res) => {
  const { surveyAnswersArray, username } = req.body;
  const result = await saveSurveyResults(
    SurveyModel,
    username,
    surveyAnswersArray
  );
  if (result === 1) {
    res.status(200).json({ message: "Successfully saved survey result!" });
  } else {
    res.status(500).json({ message: "Error saving results" });
  }
});

app.post("/getSurveyResults", async (req, res) => {
  const { AccName } = req.body;
  try {
    const surveyResults = await getSurveyResults(SurveyModel, AccName);
    console.log("SURVEY RESULTS: " + surveyResults);
    if (surveyResults) {
      res.status(200).json(surveyResults);
      console.log("Sending surveyResults to client");
    } else {
      res.status(404).json({
        message: "Survey results not found for the specified username",
      });
    }
  } catch (error) {
    console.error("Error getting survey results:", error);
    res.status(500).json({ message: "Error getting survey results" });
  }
});

app.listen(port, () => {
  console.log(
    `WebServer proxy to database listening on port localhost:${port}/`
  );
});
