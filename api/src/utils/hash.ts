import bcrypt from "bcrypt";

interface EncryptPassword{
  password: string
}

const hashPassword = async (password: EncryptPassword): Promise<string> => {
  const saltRounds = 10; // Adjust salt rounds as needed (higher value increases security)
  const hashedPassword =  bcrypt.hash(password.password, saltRounds);
  return hashedPassword;
};

export default hashPassword;
