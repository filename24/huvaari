import { PrismaClient } from '@prisma/output'

declare global {
  // eslint-disable-next-line no-var
  var db: PrismaClient | undefined
}

export const db: PrismaClient = global.db || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.db = db
