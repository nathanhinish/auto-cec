'use strict'

const debug = require('debug')('cec:handler:TIMER_STATUS')

module.exports = function timerStatus(packet) {
  debug('TIMER_STATUS', packet)
  this.emit('TIMER_STATUS', packet)
}
