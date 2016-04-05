'use strict'

const CEC = require('node-cec').CEC

module.exports = function abort(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.ABORT)
  this.sendCommand(target, args)
}
