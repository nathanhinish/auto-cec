'use strict'

const CEC = require('node-cec').CEC

module.exports = function deckControl(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.DECK_CONTROL)
  this.sendCommand(target, args)
}
