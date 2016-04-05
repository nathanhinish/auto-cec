'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportPowerStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REPORT_POWER_STATUS)
  this.sendCommand(target, args)
}
