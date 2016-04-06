'use strict'

const debug = require('debug')('cec:handler:SYSTEM_AUDIO_MODE_REQUEST')

module.exports = function systemAudioModeRequest(packet) {
  debug('SYSTEM_AUDIO_MODE_REQUEST', packet)
  this.emit('SYSTEM_AUDIO_MODE_REQUEST', packet)
}
