export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 13,
      maxItems: 15,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            unique: true,
            minimum: 1
          },
          firstName: {
            type: 'string',
            faker: 'name.findName'
          },
          lastName: {
            type: 'string',
            faker: 'name.lastName'
          },
          email: {
            type: 'string',
            format: 'email',
            faker: 'internet.email'
          }
        },
        'required': ['id', 'firstName', 'lastName', 'email']
      }
    }
  },
  'required': ['users']
};