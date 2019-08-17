const Validator = require('is-my-json-valid')
const schema = require('../schema/block')
const validator = Validator(schema, {verbose: true})
const getMsgContent = require('ssb-msg-content')

module.exports = function isBlockMessage (obj) {
  const result = validator(getMsgContent(obj))

  // exposes error messages provided by is-my-json-valid
  obj.errors = validator.errors
  
  return result
}
