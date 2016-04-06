'use strict'

const debug = require('debug')('cec:handler:TIMER_STATUS')

module.exports = function timerStatus(packet) {
  debug('TIMER_STATUS', JSON.stringify(packet))
  this.emit('TIMER_STATUS', packet)
}
