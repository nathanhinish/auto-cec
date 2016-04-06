'use strict'

const debug = require('debug')('cec:handler:SYSTEM_AUDIO_MODE_STATUS')

module.exports = function systemAudioModeStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('SYSTEM_AUDIO_MODE_STATUS', packet)
}
