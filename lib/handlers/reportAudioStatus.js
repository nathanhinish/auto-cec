'use strict'

const debug = require('debug')('cec:handler:REPORT_AUDIO_STATUS')

module.exports = function reportAudioStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('REPORT_AUDIO_STATUS', packet)
}
