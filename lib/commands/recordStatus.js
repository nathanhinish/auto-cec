'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.RECORD_STATUS)
  this.sendCommand(target, args)
}
