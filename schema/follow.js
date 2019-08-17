module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['type', 'contact', 'following'],
  properties: {
    type: {type: 'string', pattern: '^contact$'},
    contact: { $ref: '#/definitions/feedId' },
    following: {type: 'boolean' },

    // highly recommended for new feeds
    previous: { $ref: '#/definitions/messageId' }
  }
}
