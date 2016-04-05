'use strict'

const CEC = require('node-cec').CEC

module.exports = function setExternalTimer(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_EXTERNAL_TIMER)
  this.sendCommand(target, args)
}
