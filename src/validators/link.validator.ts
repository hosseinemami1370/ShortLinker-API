import { z } from 'zod'

export const createLinkSchema = z.object({
  originalUrl: z.url(),

  shortCode: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_-]+$/)
    .optional()
})