import bcrypt from "bcryptjs";

/**
 * Generates a salted hash of a string
 * @param text The string to be encrypted
 * @returns A hash of the passed in text
 */
const hashString = async (text: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword: string = await bcrypt.hashSync(text, salt);
  console.log("HASHED PASSWORD " + hashedPassword);
  
  return hashedPassword;
};

export default hashString;
