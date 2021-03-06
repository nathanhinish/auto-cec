'use strict'

const CEC = require('node-cec').CEC

module.exports = function setOsdString(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_OSD_STRING)
  this.sendCommand(target, args)
}
