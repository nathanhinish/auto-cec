'use strict'

const CEC = require('node-cec').CEC

module.exports = function clearAnalogueTimer(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.CLEAR_ANALOGUE_TIMER)
  this.sendCommand(target, args)
}
