import { prisma } from '../utils/prisma'

export default defineEventHandler(async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return tasks
})