const Validator = require('is-my-json-valid')
const schema = require('../schema/follow')
const validator = Validator(schema, {verbose: true})
const getMsgContent = require('ssb-msg-content')

module.exports = function isFollowMessage (obj) {
  const result = validator(getMsgContent(obj))

  // exposes error messages provided by is-my-json-valid
  obj.errors = validator.errors
  
  return result
}
