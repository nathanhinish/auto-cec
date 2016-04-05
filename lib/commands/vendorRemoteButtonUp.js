'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorRemoteButtonUp(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.VENDOR_REMOTE_BUTTON_UP)
  this.sendCommand(target, args)
}
