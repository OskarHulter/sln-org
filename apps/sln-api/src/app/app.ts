/* eslint-disable @typescript-eslint/ban-types */
import * as path from 'node:path'
import AutoLoad from '@fastify/autoload'
import type { FastifyInstance } from 'fastify'

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type AppOptions = {}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  })
}
