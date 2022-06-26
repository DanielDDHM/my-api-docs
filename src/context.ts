import api from './integrations/api';
import { ExpressContext } from 'apollo-server-express';
import prisma from './config/prisma';
import authenticated from './middleware/auth.middleware';

const context = ({ req }: ExpressContext) => ({
  request: req,
  api,
  prisma: prisma,
  authenticated
});

export type Context = typeof context;
export default context;
