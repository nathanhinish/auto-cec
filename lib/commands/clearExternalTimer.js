'use strict'

const CEC = require('node-cec').CEC

module.exports = function clearExternalTimer(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.CLEAR_EXTERNAL_TIMER)
  this.sendCommand(target, args)
}
