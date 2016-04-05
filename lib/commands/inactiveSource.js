'use strict'

const CEC = require('node-cec').CEC

module.exports = function inactiveSource(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.INACTIVE_SOURCE)
  this.sendCommand(target, args)
}
