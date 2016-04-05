'use strict'

const CEC = require('node-cec').CEC

module.exports = function timerStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.TIMER_STATUS)
  this.sendCommand(target, args)
}
