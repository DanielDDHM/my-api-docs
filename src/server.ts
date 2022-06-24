import express from 'express';
import { gql } from 'apollo-server-express';
import pkg from '../package.json';

import context from './context';
import config from './config';

// base types
const typDefs = gql`
  type Query
  type Mutation
`;

const app = express();

(async () => {

  app.get('/', (_, res) => {
    res.status(200).send({
      status: 'UP',
      message: "UP!",
      name: pkg.name,
    }).end();
  });

  app.listen(config.APP_PORT, () => {
    console.log(`\n🚀 Server ready at http://localhost:${config.APP_PORT}`);
    console.log(`⚛️  GraphQL at http://localhost:${config.APP_PORT}`);
  });
})();
