import { prisma } from '../database/prisma'

export async function getUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      fullName: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

export async function getCurrentUserLinks(
  userId: string
) {
  return prisma.link.findMany({
    where: {
      ownerId: userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}