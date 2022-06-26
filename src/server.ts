import 'make-promises-safe';
import express from 'express';
import config from './config';
import cors from 'cors';
import context from './context';
import typeDefs from './typeDef';
import resolvers from './resolvers';

import { StatusCode } from './constants/statuscode.typings';
import { ApolloServer } from 'apollo-server-express';

const app: express.Application = express();

// CONFIGURE GRAPHQL EXPRESS

// CONFIGURE SERVER AND OWN EXPRESSS MODULES
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  debug: true,
  introspection: true,
});

(async () => {
  await server.start();
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }));


  // VERIFICATION
  app.get('/', (_, res) => {
    res.status(StatusCode.OK).send({
      status: 'UP'
    }).end();
  });

  server.applyMiddleware({ app })

  app.listen(config.APP_PORT, () => {
    console.log(`\n🚀 Server ready at http://localhost:${config.APP_PORT}`);
    console.log(`⚛️  GraphQL at http://localhost:${config.APP_PORT}${server.graphqlPath}`);
  });
})();
