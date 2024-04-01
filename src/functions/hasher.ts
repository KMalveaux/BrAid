const bcrypt = require("bcrypt");

class authenticator {
    private saltRounds: number = 2;


  public constructor() {}

  /**
   * Generates a salted hash of a string
   * @param text The string to be encrypted
   * @returns A hash of the passed in text
   */
  public async hashString(text: string): Promise<string> {
    const hashedPassword: string = await bcrypt.hash(text, this.saltRounds);
    return hashedPassword;
  }

  public compareHashes(){
    // Send given hash to server and compare hashes on server. Return user profile if correct.
  }


}
