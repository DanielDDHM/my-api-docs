import api from './integrations/api';
import { ExpressContext } from 'apollo-server-express';

const context = ({ req }: ExpressContext) => ({
  request: req,
  api
});

export type Context = typeof context;
export default context;
