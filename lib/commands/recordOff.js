'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordOff(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.RECORD_OFF)
  this.sendCommand(target, args)
}
