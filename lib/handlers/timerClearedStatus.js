'use strict'

const debug = require('debug')('cec:handler:TIMER_CLEARED_STATUS')

module.exports = function timerClearedStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('TIMER_CLEARED_STATUS', packet)
}
