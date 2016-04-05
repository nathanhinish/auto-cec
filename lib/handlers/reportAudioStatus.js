'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportAudioStatus(packet) {
  console.info('REPORT_AUDIO_STATUS', packet)
}
