import type { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'
import { expectAssignable, expectType } from 'tsd'
import Fastify, { FastifyInstance, FastifyLoggerInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from 'fastify'
import { FromSchema } from 'json-schema-to-ts'

const addressSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    line1: { type: 'string' },
    line2: { type: 'string' },
    city: { type: 'string' }
  },
  required: ['line1', 'city']
} as const
type Address = FromSchema<typeof addressSchema>

const userSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    givenName: { type: 'string' },
    familyName: { type: 'string' }
  },
  required: ['givenName', 'familyName']
} as const
type User = FromSchema<typeof userSchema>

const sharedSchema = {
  $id: 'shared-schema',
  definitions: {
    address: addressSchema,
    user: userSchema
  }
} as const

type JsonSchemaToTsProviderWithSharedSchema = JsonSchemaToTsProvider<{
  references: [typeof sharedSchema]
}>
const fastify = Fastify().withTypeProvider<JsonSchemaToTsProviderWithSharedSchema>()

expectAssignable<FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, FastifyLoggerInstance, JsonSchemaToTsProviderWithSharedSchema>>(fastify)

fastify.get('/profile', {
  schema: {
    body: {
      type: 'object',
      properties: {
        user: {
          $ref: 'shared-schema#/definitions/user'
        },
        address: {
          $ref: 'shared-schema#/definitions/address'
        }
      },
      required: ['user', 'address']
    } as const
  }
}, (req) => {
  expectType<User>(req.body.user)
  expectType<Address>(req.body.address)
})

const userSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    givenName: { type: "string" },
    familyName: { type: "string" },
  },
  required: ["givenName", "familyName"],
} as const

const sharedSchema = {
  $id: "shared-schema",
  definitions: {
    user: userSchema,
  },
} as const

// then when using JsonSchemaToTsProvider, the shared schema is passed through the generic
// references takes an array so can pass in multiple shared schema
const fastify =
  Fastify().withTypeProvider<
    JsonSchemaToTsProvider<{ references: [typeof sharedSchema] }>
  >()

// now reference the shared schema like the following
fastify.get(
  "/profile",
  {
    schema: {
      body: {
        type: "object",
        properties: {
          user: {
            $ref: "shared-schema#/definitions/user",
          },
        },
        required: ['user'],
      },
    } as const,
  },
  (req) => {
    // givenName and familyName will be correctly typed as strings!
    const { givenName, familyName } = req.body.user
  }
)
