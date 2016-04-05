'use strict'

const CEC = require('node-cec').CEC

module.exports = function textViewOn(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.TEXT_VIEW_ON)
  this.sendCommand(target, args)
}
