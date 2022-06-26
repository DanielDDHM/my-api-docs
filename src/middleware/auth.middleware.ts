import { Request } from 'express';
import { verify, TokenExpiredError } from 'jsonwebtoken';
import auth from '../config/auth';
import { TokenPayload } from '../types/default.typings';

const authenticated = (request: Request) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Missing token');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, auth.jwt.secret);

    const { id, role } = decoded as TokenPayload;

    request.user = {
      id,
      role,
    };

    return request;
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      throw new Error('Sessão expirada.');
    }
    throw new Error('Token inválido.');
  }
};

export default authenticated;
