const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const { Sequelize, DataTypes } = require("sequelize");

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
app.post("/createUser", (req, res) => {
  createNewAccount(req.body.username, req.body.passwordHash);
});

/**
 * Logins in a user using their account name and a password hash
 */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  loginUser(UserModel, username, password);
  console.log("Username: " + username);
  console.log("Password: " + password);
  res.send("Login Attempted!");
});

app.listen(port, () => {
  console.log(
    `WebServer proxy to database listening on port localhost:${port}/`
  );
});
