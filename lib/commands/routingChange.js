'use strict'

const CEC = require('node-cec').CEC

module.exports = function routingChange(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.ROUTING_CHANGE)
  this.sendCommand(target, args)
}
