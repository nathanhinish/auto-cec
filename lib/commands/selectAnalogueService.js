'use strict'

const CEC = require('node-cec').CEC

module.exports = function selectAnalogueService(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SELECT_ANALOGUE_SERVICE)
  this.sendCommand(target, args)
}
