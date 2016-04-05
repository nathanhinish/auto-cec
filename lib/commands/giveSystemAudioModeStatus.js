'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveSystemAudioModeStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_SYSTEM_AUDIO_MODE_STATUS)
  this.sendCommand(target, args)
}
