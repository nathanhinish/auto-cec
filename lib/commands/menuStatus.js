'use strict'

const CEC = require('node-cec').CEC

module.exports = function menuStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.MENU_STATUS)
  this.sendCommand(target, args)
}
