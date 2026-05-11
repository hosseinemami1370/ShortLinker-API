import { Router } from 'express'

import {
  getMyLinksController,
  getUsersController
} from '../controllers/user.controller'

import { authenticate } from '../middlewares/auth.middleware'

const router = Router()

router.get('/', getUsersController)

router.get(
  '/me/links',
  authenticate,
  getMyLinksController
)

export default router