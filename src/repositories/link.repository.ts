import { prisma } from '../database/prisma'

export function findLinkByCode(shortCode: string) {
  return prisma.link.findUnique({
    where: {
      shortCode
    }
  })
}

export function createLink(data: {
  originalUrl: string
  shortCode: string
  ownerId: string
}) {
  return prisma.link.create({
    data
  })
}

export function incrementClicks(id: string) {
  return prisma.link.update({
    where: {
      id
    },
    data: {
      clicks: {
        increment: 1
      }
    }
  })
}

export function deleteLink(id: string) {
  return prisma.link.delete({
    where: {
      id
    }
  })
}

export function getUserLinks(ownerId: string) {
  return prisma.link.findMany({
    where: {
      ownerId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}