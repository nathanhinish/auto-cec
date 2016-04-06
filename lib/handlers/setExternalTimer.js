'use strict'

const debug = require('debug')('cec:handler:SET_EXTERNAL_TIMER')

module.exports = function setExternalTimer(packet) {
  debug('SET_EXTERNAL_TIMER', JSON.stringify(packet))
  this.emit('SET_EXTERNAL_TIMER', packet)
}
