import bcrypt from 'bcryptjs';

const encrypt = (pass: string) => bcrypt.hashSync(pass, 8);

const validatePassword = (password: string) => {
  const rgx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  return rgx.test(password);
};

export { validatePassword, encrypt }