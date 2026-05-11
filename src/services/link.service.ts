import { prisma } from '../database/prisma'

import { generateShortCode } from '../utils/short-code'
import { RESERVED_SHORT_CODES } from '../constants/reserved-routes'
import {
  createLink,
  deleteLink,
  findLinkByCode,
  incrementClicks
} from '../repositories/link.repository'

type CreateLinkInput = {
  originalUrl: string
  shortCode?: string
  userId: string
}

export async function createShortLink(
  data: CreateLinkInput
) {
  const shortCode =
    data.shortCode || generateShortCode()

  const existingLink = await findLinkByCode(
    shortCode
  )

  if (existingLink) {
    throw new Error('Short code already exists')
  }

  return createLink({
    originalUrl: data.originalUrl,
    shortCode,
    ownerId: data.userId
  })
}

export async function getLinkByCode(
  shortCode: string
) {
  if (
    RESERVED_SHORT_CODES.includes(
      shortCode.toLowerCase()
    )
  ) {
    throw new Error('Short code is reserved')
  }
  const link = await findLinkByCode(shortCode)

  if (!link) {
    throw new Error('Link not found')
  }

  await incrementClicks(link.id)

  return link
}

export async function removeLink(
  shortCode: string,
  userId: string
) {
  const link = await findLinkByCode(shortCode)

  if (!link) {
    throw new Error('Link not found')
  }

  if (link.ownerId !== userId) {
    throw new Error('Forbidden')
  }

  return deleteLink(link.id)
}