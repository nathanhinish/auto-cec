'use strict'

const CEC = require('node-cec').CEC

module.exports = function setSystemAudioMode(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_SYSTEM_AUDIO_MODE)
  this.sendCommand(target, args)
}
