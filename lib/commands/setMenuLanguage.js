'use strict'

const CEC = require('node-cec').CEC

module.exports = function setMenuLanguage(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_MENU_LANGUAGE)
  this.sendCommand(target, args)
}
