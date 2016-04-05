'use strict'

const CEC = require('node-cec').CEC

module.exports = function startArc(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.START_ARC)
  this.sendCommand(target, args)
}
