import { FastifyRequest } from 'fastify'

export async function logTransactions(request: FastifyRequest) {
  console.log(`[${request.method}] ${request.url}`)
}
