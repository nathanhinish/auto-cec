'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportAudioStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.REPORT_AUDIO_STATUS)
  this.sendCommand(target, args)
}
