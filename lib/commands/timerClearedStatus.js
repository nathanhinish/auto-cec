'use strict'

const CEC = require('node-cec').CEC

module.exports = function timerClearedStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.TIMER_CLEARED_STATUS)
  this.sendCommand(target, args)
}
