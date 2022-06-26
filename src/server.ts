import express from 'express';
import config from './config';

const app = express();

(async () => {

  app.get('/', (_, res) => {
    res.status(200).send({
      status: 'UP',
      message: "UP!",
    }).end();
  });

  app.listen(config.APP_PORT, () => {
    console.log(`\n🚀 Server ready at http://localhost:${config.APP_PORT}`);
    console.log(`⚛️  GraphQL at http://localhost:${config.APP_PORT}`);
  });
})();
