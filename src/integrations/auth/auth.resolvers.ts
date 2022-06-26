import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import context, { Context } from '../../context';
import auth from '../../config/auth';
import { LoginRequest } from '../../types';

export default {
  Mutation: {
    authUser: async (_: any,
      args: LoginRequest,
      ctx: Context) => {
      const { email, password } = args.data;

    }
  }
}