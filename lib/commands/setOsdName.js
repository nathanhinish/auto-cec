'use strict'

const CEC = require('node-cec').CEC

module.exports = function setOsdName(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_OSD_NAME)
  this.sendCommand(target, args)
}
