import { beforeEach, describe, it } from 'node:test'
import Fastify, { type FastifyInstance } from 'fastify'
import { expect } from 'vitest'
import { app } from './app'

describe('GET /', () => {
  let server: FastifyInstance

  beforeEach(() => {
    server = Fastify()
    server.register(app)
  })

  it('should respond with a message', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    })

    expect(response.json()).toEqual({ message: 'Hello API' })
  })
})
