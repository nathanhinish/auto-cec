'use strict'

const CEC = require('node-cec').CEC

module.exports = function tunerStepIncrement(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.TUNER_STEP_INCREMENT)
  this.sendCommand(target, args)
}
