'use strict'

const CEC = require('node-cec').CEC

module.exports = function standby(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.STANDBY)
  this.sendCommand(target, args)
}
