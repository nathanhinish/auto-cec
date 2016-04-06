'use strict'

const debug = require('debug')('cec:handler:CLEAR_DIGITAL_TIMER')

module.exports = function clearDigitalTimer(packet) {
  debug('CLEAR_DIGITAL_TIMER', packet)
  this.emit('CLEAR_DIGITAL_TIMER', packet)
}
