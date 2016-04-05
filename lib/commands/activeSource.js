'use strict'

const CEC = require('node-cec').CEC

module.exports = function activeSource(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.ACTIVE_SOURCE)
  this.sendCommand(target, args)
}
