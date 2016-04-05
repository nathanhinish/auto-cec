'use strict'

const CEC = require('node-cec').CEC

module.exports = function userControlPressed(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.USER_CONTROL_PRESSED)
  this.sendCommand(target, args)
}
