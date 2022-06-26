export interface TokenPayload {
  iat: number;
  exp: number;
  id: string;
  role: string,
}

export interface LoginRequest {
  data: {
    nick: string,
    email: string,
    password: string,
  }
}