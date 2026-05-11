import { prisma } from '../database/prisma'

import {
  hashPassword,
  verifyPassword
} from '../utils/hash'

import {
  createUser,
  findUserByEmail
} from '../repositories/user.repository'

import { createAccessToken } from '../utils/token'

type RegisterInput = {
  email: string
  password: string
  fullName?: string
}

type LoginInput = {
  email: string
  password: string
}

export async function registerUser(data: RegisterInput) {
  const existingUser = await findUserByEmail({
    where: {
      email: data.email
    }
  })

  if (existingUser) {
    throw new Error('Email already exists')
  }

  const hashedPassword = await hashPassword(
    data.password
  )

  const user = await createUser({
    data: {
      email: data.email,
      password: hashedPassword,
      fullName: data.fullName
    }
  })

  const token = createAccessToken({
    sub: user.id,
    email: user.email
  })

  return {
    user,
    token
  }
}

export async function loginUser(data: LoginInput) {
  const user = await findUserByEmail({
    where: {
      email: data.email
    }
  })

  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isPasswordValid = await verifyPassword(
    user.password,
    data.password
  )

  if (!isPasswordValid) {
    throw new Error('Invalid credentials')
  }

  const token = createAccessToken({
    sub: user.id,
    email: user.email
  })

  return {
    user,
    token
  }
}