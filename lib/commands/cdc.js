'use strict'

const CEC = require('node-cec').CEC

module.exports = function cdc(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.CDC)
  this.sendCommand(target, args)
}
