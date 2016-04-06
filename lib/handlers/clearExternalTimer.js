'use strict'

const debug = require('debug')('cec:handler:CLEAR_EXTERNAL_TIMER')

module.exports = function clearExternalTimer(packet) {
  debug('CLEAR_EXTERNAL_TIMER', JSON.stringify(packet))
  this.emit('CLEAR_EXTERNAL_TIMER', packet)
}
