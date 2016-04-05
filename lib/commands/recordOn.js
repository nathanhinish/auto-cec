'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordOn(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.RECORD_ON)
  this.sendCommand(target, args)
}
