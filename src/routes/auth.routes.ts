import { Router } from 'express'

import {
  loginController,
  signupController
} from '../controllers/auth.controller'

import { validate } from '../middlewares/validate.middleware'

import {
  loginSchema,
  signupSchema
} from '../validators/auth.validator'

const router = Router()

router.post(
  '/signup',
  validate(signupSchema),
  signupController
)

router.post(
  '/login',
  validate(loginSchema),
  loginController
)

export default router