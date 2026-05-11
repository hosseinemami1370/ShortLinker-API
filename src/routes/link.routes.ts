import { Router } from 'express'

import {
  createLinkController,
  deleteLinkController,
  getLinkController,
  redirectController
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

/**
 * Public redirect endpoint
 * Example:
 * /api/links/r/google
 */
router.get(
  '/r/:shortCode',
  redirectController
)

/**
 * Get link details
 */
router.get(
  '/:shortCode',
  getLinkController
)

/**
 * Delete owned link
 */
router.delete(
  '/:shortCode',
  authenticate,
  deleteLinkController
)

export default router