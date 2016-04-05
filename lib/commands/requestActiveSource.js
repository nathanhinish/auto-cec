'use strict'

const CEC = require('node-cec').CEC

module.exports = function requestActiveSource(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REQUEST_ACTIVE_SOURCE)
  this.sendCommand(target, args)
}
