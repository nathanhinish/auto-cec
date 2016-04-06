'use strict'

const debug = require('debug')('cec:handler:SET_SYSTEM_AUDIO_MODE')

module.exports = function setSystemAudioMode(packet) {
  debug(JSON.stringify(packet))
  this.emit('SET_SYSTEM_AUDIO_MODE', packet)
}
