import type { FastifyPluginAsyncJsonSchemaToTs } from '@fastify/type-provider-json-schema-to-ts'
import type { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'

export const plugin: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _opts) => {
  fastify.get(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            x: { type: 'string' },
            y: { type: 'number' },
            z: { type: 'boolean' },
          },
          required: ['x', 'y', 'z'],
        } as const,
      },
    },
    req => {
      /// The `x`, `y`, and `z` types are automatically inferred
      const { x, y, z } = req.body
      if (!x || !y || !z) { throw new Error('x, y, z are required') }


      console.log('🚀 ~ file: jsonSchemaToTs.ts:28 ~ body:', req.body)

      console.log('🚀 ~ file: jsonSchemaToTs.ts:28 ~ z:', z)

      console.log('🚀 ~ file: jsonSchemaToTs.ts:28 ~ y:', y)

      console.log('🚀 ~ file: jsonSchemaToTs.ts:28 ~ x:', x)
    },
  )
}
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(jsonSchemaToTs)
})
