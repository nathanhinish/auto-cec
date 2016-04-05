'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveSystemAudioModeStatus(packet) {
  console.info('GIVE_SYSTEM_AUDIO_MODE_STATUS', JSON.stringify(packet))
}
