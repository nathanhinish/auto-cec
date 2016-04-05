'use strict'

const CEC = require('node-cec').CEC

module.exports = function setAudioRate(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_AUDIO_RATE)
  this.sendCommand(target, args)
}
