'use strict'

const CEC = require('node-cec').CEC

module.exports = function getCecVersion(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GET_CEC_VERSION)
  this.sendCommand(target, args)
}
