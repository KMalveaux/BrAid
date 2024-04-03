var bcrypt = require("bcryptjs");
const { Sequelize, Model, DataTypes } = require("sequelize");

/**
 * Searches for the account associated with the username.
 * @param {Sequelize Model} Model - The Sequelize model to use for creating the user.
 * @param {string} AccName - The username for the new user.
 * @param {string} passwordHash - The hashed password for the new user.
 * @returns {object|null} - An object containing user data if login is successful, or null otherwise.
 * */
async function loginUser(Model, AccName, passwordHash) {
  const storedUser = await Model.findOne({ where: { username: AccName } });

  console.log(AccName, passwordHash);
  if (storedUser == null) {
    console.log("Username incorrect!");
    return {};
  } else {
    const passwordMatch = await bcrypt.compareSync(
      passwordHash,
      storedUser.hash
    );
    console.log(passwordHash, storedUser.hash);

    if (passwordMatch) {
      console.log(AccName + " logged in successfully!");
      const userData = {
        id: storedUser.id,
        username: storedUser.username,
      };
      return userData;
    } else {
      console.log("password incorrect!");
      return {};
    }
  }
}

module.exports = loginUser;
