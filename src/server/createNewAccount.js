/**
 * First checks to see if username already exists in database. Creates a new user if not.
 * @param {Sequelize Model} Model - The Sequelize model to use for creating the user.
 * @param {string} AccName - The username for the new user.
 * @param {string} passwordHash - The hashed password for the new user.
 * @returns
 */
async function createNewAccount(Model, AccName, passwordHash) {
  // Gets the first entry, if it exists, that has the requested account name to be created.
  const existingUsers = await Model.findOne({ where: { username: AccName } });

  if (existingUsers == null) {
    console.log("No users with the provided users names currently exist.");
    const newUser = Model.build({ username: AccName, hash: passwordHash });
    await newUser.save();
    console.log(newUser.username + " was saved to the database!");
  } else {
    console.log(
      "A user with the provided username already exists! Aborting: new user not created."
    );
  }
}

// Using CommonJS modules here instead of ESM for Node.js support
module.exports = createNewAccount;
