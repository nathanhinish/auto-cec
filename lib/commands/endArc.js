'use strict'

const CEC = require('node-cec').CEC

module.exports = function endArc(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.END_ARC)
  this.sendCommand(target, args)
}
