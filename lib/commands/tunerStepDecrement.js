'use strict'

const CEC = require('node-cec').CEC

module.exports = function tunerStepDecrement(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.TUNER_STEP_DECREMENT)
  this.sendCommand(target, args)
}
