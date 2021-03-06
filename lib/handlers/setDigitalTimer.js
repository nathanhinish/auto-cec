'use strict'

const debug = require('debug')('cec:handler:SET_DIGITAL_TIMER')

module.exports = function setDigitalTimer(packet) {
  debug(JSON.stringify(packet))
  this.emit('SET_DIGITAL_TIMER', packet)
}
