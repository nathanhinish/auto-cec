'use strict'

const CEC = require('node-cec').CEC

module.exports = function setDigitalTimer(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_DIGITAL_TIMER)
  this.sendCommand(target, args)
}
