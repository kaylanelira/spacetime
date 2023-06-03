// import PrimaClient enabling query logging
// allows to perform CRUD operations and queries

import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'],
})
