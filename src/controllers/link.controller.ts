import { Request, Response } from 'express'

import {
  createShortLink,
  getLinkByCode,
  removeLink
} from '../services/link.service'

export async function createLinkController(
  req: Request,
  res: Response
) {
  const link = await createShortLink({
    originalUrl: req.body.originalUrl,
    shortCode: req.body.shortCode,
    userId: req.user!.sub
  })

  return res.status(201).json({
    success: true,
    data: link
  })
}

export async function getLinkController(
  req: Request,
  res: Response
) {
  const link = await getLinkByCode(
    req.params.shortCode
  )

  return res.json({
    success: true,
    data: link
  })
}

export async function deleteLinkController(
  req: Request,
  res: Response
) {
  await removeLink(
    req.params.shortCode,
    req.user!.sub
  )

  return res.json({
    success: true,
    message: 'Link deleted successfully'
  })
}

export async function redirectController(
    req: Request,
    res: Response
  ) {
    const link = await getLinkByCode(
      req.params.shortCode
    )
  
    return res.redirect(link.originalUrl)
  }