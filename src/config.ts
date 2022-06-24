import dotenv from 'dotenv';

dotenv.config();

export default {
  APP_PORT: Number(process.env.APP_PORT) || 4000,
};
