'use strict'

const debug = require('debug')('cec:handler:SET_AUDIO_RATE')

module.exports = function setAudioRate(packet) {
  debug(JSON.stringify(packet))
  this.emit('SET_AUDIO_RATE', packet)
}
