'use strict'

const CEC = require('node-cec').CEC

module.exports = function selectDigitalService(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SELECT_DIGITAL_SERVICE)
  this.sendCommand(target, args)
}
