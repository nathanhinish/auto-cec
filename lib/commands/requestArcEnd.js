'use strict'

const CEC = require('node-cec').CEC

module.exports = function requestArcEnd(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REQUEST_ARC_END)
  this.sendCommand(target, args)
}
