'use strict'

const CEC = require('node-cec').CEC

module.exports = function systemAudioModeRequest(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SYSTEM_AUDIO_MODE_REQUEST)
  this.sendCommand(target, args)
}
