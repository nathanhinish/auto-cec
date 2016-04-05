'use strict'

const CEC = require('node-cec').CEC

module.exports = function setTimerProgramTitle(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_TIMER_PROGRAM_TITLE)
  this.sendCommand(target, args)
}
