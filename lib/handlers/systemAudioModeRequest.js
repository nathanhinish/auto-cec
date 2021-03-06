'use strict'

const debug = require('debug')('cec:handler:SYSTEM_AUDIO_MODE_REQUEST')

module.exports = function systemAudioModeRequest(packet) {
  debug(JSON.stringify(packet))
  this.emit('SYSTEM_AUDIO_MODE_REQUEST', packet)
}
