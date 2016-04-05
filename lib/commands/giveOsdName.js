'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveOsdName(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_OSD_NAME)
  this.sendCommand(target, args)
}
