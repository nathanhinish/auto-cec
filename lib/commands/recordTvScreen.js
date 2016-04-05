'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordTvScreen(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.RECORD_TV_SCREEN)
  this.sendCommand(target, args)
}
