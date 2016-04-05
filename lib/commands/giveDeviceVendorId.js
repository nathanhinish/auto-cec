'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveDeviceVendorId(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_DEVICE_VENDOR_ID)
  this.sendCommand(target, args)
}
