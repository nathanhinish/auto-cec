'use strict'

const CEC = require('node-cec').CEC

module.exports = function none(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.NONE)
  this.sendCommand(target, args)
}
