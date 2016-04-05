'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportPhysicalAddress(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REPORT_PHYSICAL_ADDRESS)
  this.sendCommand(target, args)
}
