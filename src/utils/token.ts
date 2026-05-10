import jwt from 'jsonwebtoken'
import { env } from '../config/env'

type TokenPayload = {
  sub: string
  email: string
}

export function createAccessToken(payload: TokenPayload) {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN
  })
}