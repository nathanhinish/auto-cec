'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveTunerDeviceStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_TUNER_DEVICE_STATUS)
  this.sendCommand(target, args)
}
