'use strict'

const CEC = require('node-cec').CEC

module.exports = function givePhysicalAddress(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_PHYSICAL_ADDRESS)
  this.sendCommand(target, args)
}
