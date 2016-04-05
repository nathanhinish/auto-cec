'use strict'

const CEC = require('node-cec').CEC

module.exports = function routingInformation(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.ROUTING_INFORMATION)
  this.sendCommand(target, args)
}
