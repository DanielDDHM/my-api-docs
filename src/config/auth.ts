export default {
  jwt: {
    secret: process.env.APP_SECRET! || 'JWT_SECRET',
    expiresIn: '1d',
  },
};
