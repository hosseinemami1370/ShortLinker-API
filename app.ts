import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import authRoutes from './routes/auth.routes'
import linkRoutes from './routes/link.routes'
import userRoutes from './routes/user.routes'

import { errorHandler } from './middlewares/error.middleware'

import { swaggerMiddleware } from './config/swagger'

export const app = express()

app.use('/docs', swaggerMiddleware)

app.use(cors())

app.use(helmet())

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/auth', authRoutes)

app.use('/api/links', linkRoutes)

app.use('/api/users', userRoutes)

app.use(errorHandler)import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import authRoutes from './routes/auth.routes'
import linkRoutes from './routes/link.routes'
import userRoutes from './routes/user.routes'

import { errorHandler } from './middlewares/error.middleware'

export const app = express()

app.use(cors())

app.use(helmet())

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/auth', authRoutes)

app.use('/api/links', linkRoutes)

app.use('/api/users', userRoutes)

app.use(errorHandler)