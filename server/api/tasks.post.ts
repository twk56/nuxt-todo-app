import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.title || !body.title.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Title is required',
    })
  }

  return await prisma.task.create({
    data: { title: body.title.trim() },
  })
})