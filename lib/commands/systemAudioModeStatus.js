'use strict'

const CEC = require('node-cec').CEC

module.exports = function systemAudioModeStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SYSTEM_AUDIO_MODE_STATUS)
  this.sendCommand(target, args)
}
