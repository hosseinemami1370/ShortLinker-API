import { Request, Response } from 'express'

import {
  getCurrentUserLinks,
  getUsers
} from '../services/user.service'

export async function getUsersController(
  _req: Request,
  res: Response
) {
  const users = await getUsers()

  return res.json({
    success: true,
    data: users
  })
}

export async function getMyLinksController(
  req: Request,
  res: Response
) {
  const links = await getCurrentUserLinks(
    req.user!.sub
  )

  return res.json({
    success: true,
    data: links
  })
}