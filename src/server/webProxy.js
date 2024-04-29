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

app.listen(port, () => {
  console.log(
    `WebServer proxy to database listening on port localhost:${port}/`
  );
});
