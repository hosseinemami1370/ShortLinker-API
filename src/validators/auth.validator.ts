import { z } from 'zod'

export const signupSchema = z.object({
  email: z.email(),

  password: z.string().min(6, {
    message: 'Password must contain at least 6 characters'
  }),

  fullName: z.string().min(2).optional()
})

export const loginSchema = z.object({
  email: z.email(),

  password: z.string().min(6)
})