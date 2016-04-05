'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorCommand(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.VENDOR_COMMAND)
  this.sendCommand(target, args)
}
