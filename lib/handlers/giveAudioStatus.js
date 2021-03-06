'use strict'

const debug = require('debug')('cec:handler:GIVE_AUDIO_STATUS')

module.exports = function giveAudioStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('GIVE_AUDIO_STATUS', packet)
}
