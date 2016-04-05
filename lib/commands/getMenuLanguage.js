'use strict'

const CEC = require('node-cec').CEC

module.exports = function getMenuLanguage(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GET_MENU_LANGUAGE)
  this.sendCommand(target, args)
}
