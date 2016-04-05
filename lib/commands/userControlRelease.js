'use strict'

const CEC = require('node-cec').CEC

module.exports = function userControlRelease(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.USER_CONTROL_RELEASE)
  this.sendCommand(target, args)
}
