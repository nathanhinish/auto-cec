'use strict'

const CEC = require('node-cec').CEC

module.exports = function setAudioRate(packet) {
  console.info('SET_AUDIO_RATE', JSON.stringify(packet))
}
