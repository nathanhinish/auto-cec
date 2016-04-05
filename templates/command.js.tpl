'use strict'

const CEC = require('node-cec').CEC

module.exports = function <%= camel %>(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.<%= original %>)
  this.sendCommand(target, args)
}
