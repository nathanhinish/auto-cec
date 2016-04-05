'use strict'

const CEC = require('node-cec').CEC

module.exports = function deviceVendorId(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.DEVICE_VENDOR_ID)
  this.sendCommand(target, args)
}
