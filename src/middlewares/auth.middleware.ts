import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { env } from '../config/env'

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization

  if (!authorization?.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }

  const token = authorization.split(' ')[1]

  try {
    const decoded = jwt.verify(
      token,
      env.JWT_SECRET
    ) as Request['user']

    req.user = decoded

    next()
  } catch {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    })
  }
}