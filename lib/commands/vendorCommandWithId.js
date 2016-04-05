'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorCommandWithId(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.VENDOR_COMMAND_WITH_ID)
  this.sendCommand(target, args)
}
