import { Request, Response } from 'express'

import {
  loginUser,
  registerUser
} from '../services/auth.service'

export async function signupController(
  req: Request,
  res: Response
) {
  const result = await registerUser(req.body)

  return res.status(201).json({
    success: true,
    data: result
  })
}

export async function loginController(
  req: Request,
  res: Response
) {
  const result = await loginUser(req.body)

  return res.json({
    success: true,
    data: result
  })
}