'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveDeckStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_DECK_STATUS)
  this.sendCommand(target, args)
}
