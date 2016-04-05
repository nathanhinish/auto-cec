'use strict'

const CEC = require('node-cec').CEC

module.exports = function clearDigitalTimer(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.CLEAR_DIGITAL_TIMER)
  this.sendCommand(target, args)
}
