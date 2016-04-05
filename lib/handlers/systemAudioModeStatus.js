'use strict'

const CEC = require('node-cec').CEC

module.exports = function systemAudioModeStatus(packet) {
  console.info('SYSTEM_AUDIO_MODE_STATUS', JSON.stringify(packet))
}
