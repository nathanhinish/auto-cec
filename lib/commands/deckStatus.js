'use strict'

const CEC = require('node-cec').CEC

module.exports = function deckStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.DECK_STATUS)
  this.sendCommand(target, args)
}
