import { prisma } from '../database/prisma'

import { generateShortCode } from '../utils/short-code'

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

  const existingLink = await prisma.link.findUnique({
    where: {
      shortCode
    }
  })

  if (existingLink) {
    throw new Error('Short code already exists')
  }

  return prisma.link.create({
    data: {
      originalUrl: data.originalUrl,
      shortCode,
      ownerId: data.userId
    }
  })
}

export async function getLinkByCode(
  shortCode: string
) {
  const link = await prisma.link.findUnique({
    where: {
      shortCode
    }
  })

  if (!link) {
    throw new Error('Link not found')
  }

  await prisma.link.update({
    where: {
      id: link.id
    },
    data: {
      clicks: {
        increment: 1
      }
    }
  })

  return link
}

export async function removeLink(
  shortCode: string,
  userId: string
) {
  const link = await prisma.link.findUnique({
    where: {
      shortCode
    }
  })

  if (!link) {
    throw new Error('Link not found')
  }

  if (link.ownerId !== userId) {
    throw new Error('Forbidden')
  }

  return prisma.link.delete({
    where: {
      id: link.id
    }
  })
}