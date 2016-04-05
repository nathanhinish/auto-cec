'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportArcStarted(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REPORT_ARC_STARTED)
  this.sendCommand(target, args)
}
