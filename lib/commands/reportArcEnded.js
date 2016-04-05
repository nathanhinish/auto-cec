'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportArcEnded(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REPORT_ARC_ENDED)
  this.sendCommand(target, args)
}
