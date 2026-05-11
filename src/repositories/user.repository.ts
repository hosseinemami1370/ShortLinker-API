import { prisma } from '../database/prisma'

export function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  })
}

export function createUser(data: {
  email: string
  password: string
  fullName?: string
}) {
  return prisma.user.create({
    data
  })
}

export function getAllUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      fullName: true,
      createdAt: true
    }
  })
}