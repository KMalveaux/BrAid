/**
 * Searches for the account associated with the username.
 * @param {Sequelize Model} Model - The Sequelize model to use for creating the user.
 * @param {string} AccName - The username for the new user.
 * @param {string} passwordHash - The hashed password for the new user.
 * @returns
 */
async function loginUser(Model, AccName, passwordHash) {
  const storedUser = await Model.findOne({ where: { username: AccName } });

  if (storedUser == null) {
    console.log("Username incorrect!");
  } else {
    if (passwordHash == storedUser.hash) {
      console.log(AccName + " logged in successfully!");
    } else {
      console.log("password incorrect!");
    }
  }
}

module.exports = loginUser;
