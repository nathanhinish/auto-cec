'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorRemoteButtonDown(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.VENDOR_REMOTE_BUTTON_DOWN)
  this.sendCommand(target, args)
}
