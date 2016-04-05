'use strict'

const CEC = require('node-cec').CEC

module.exports = function requestArcStart(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REQUEST_ARC_START)
  this.sendCommand(target, args)
}
