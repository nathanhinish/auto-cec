'use strict'

const CEC = require('node-cec').CEC

module.exports = function tunerDeviceStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.TUNER_DEVICE_STATUS)
  this.sendCommand(target, args)
}
