'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveDevicePowerStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_DEVICE_POWER_STATUS)
  this.sendCommand(target, args)
}
