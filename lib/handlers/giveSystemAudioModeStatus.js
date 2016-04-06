'use strict'

const debug = require('debug')('cec:handler:GIVE_SYSTEM_AUDIO_MODE_STATUS')

module.exports = function giveSystemAudioModeStatus(packet) {
  debug('GIVE_SYSTEM_AUDIO_MODE_STATUS', JSON.stringify(packet))
  this.emit('GIVE_SYSTEM_AUDIO_MODE_STATUS', packet)
}
