'use strict'

const CEC = require('node-cec').CEC

module.exports = function setAnalogueTimer(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_ANALOGUE_TIMER)
  this.sendCommand(target, args)
}
