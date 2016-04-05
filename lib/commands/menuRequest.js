'use strict'

const CEC = require('node-cec').CEC

module.exports = function menuRequest(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.MENU_REQUEST)
  this.sendCommand(target, args)
}
