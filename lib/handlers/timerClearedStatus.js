'use strict'

const debug = require('debug')('cec:handler:TIMER_CLEARED_STATUS')

module.exports = function timerClearedStatus(packet) {
  debug('TIMER_CLEARED_STATUS', packet)
  this.emit('TIMER_CLEARED_STATUS', packet)
}
