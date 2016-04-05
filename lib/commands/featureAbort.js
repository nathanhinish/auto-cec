'use strict'

const CEC = require('node-cec').CEC

module.exports = function featureAbort(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.FEATURE_ABORT)
  this.sendCommand(target, args)
}
