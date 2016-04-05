'use strict'

const CEC = require('node-cec').CEC

module.exports = function cecVersion(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.CEC_VERSION)
  this.sendCommand(target, args)
}
