'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveAudioStatus(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.GIVE_AUDIO_STATUS)
  this.sendCommand(target, args)
}
