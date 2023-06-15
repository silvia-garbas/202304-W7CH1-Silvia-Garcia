import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret } from '../config.js';
import { HttpError } from '../types/http.error.js';

export type PayLoadToken = {
  id: string;
  userName: string;
} & jwt.JwtPayload;

// No constructor no se instancia
// Define métodas de caracter static
export class AuthServices {
  private static salt = 10;

  static createJWT(payload: PayLoadToken) {
    const token = jwt.sign(payload, secret!);
    return token;
  }

  static verifyJWTGettingPayload(token: string) {
    // eslint-disable-next-line spaced-comment
    const result = jwt.verify(token, secret!); //Devuelve un string o el JWPayload. devuelve string cuando falla.
    if (typeof result === 'string') {
      throw new HttpError(498, 'Invalid token', result);
    }

    return result;
  }

  static hash(value: string) {
    return hash(value, AuthServices.salt);
  }

  static compare(value: string, hash: string) {
    return compare(value, hash); // Asea valor y si coincide devuelve true si no false. devuelve promesa de booleano
  }
}
