import { Router } from 'express'

import {
  createLinkController,
  deleteLinkController,
  getLinkController
} from '../controllers/link.controller'

import { authenticate } from '../middlewares/auth.middleware'

import { validate } from '../middlewares/validate.middleware'

import { createLinkSchema } from '../validators/link.validator'

const router = Router()

router.post(
  '/',
  authenticate,
  validate(createLinkSchema),
  createLinkController
)

router.get('/:shortCode', getLinkController)

router.delete(
  '/:shortCode',
  authenticate,
  deleteLinkController
)

export default router