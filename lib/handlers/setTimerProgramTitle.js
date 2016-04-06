'use strict'

const debug = require('debug')('cec:handler:SET_TIMER_PROGRAM_TITLE')

module.exports = function setTimerProgramTitle(packet) {
  debug('SET_TIMER_PROGRAM_TITLE', packet)
  this.emit('SET_TIMER_PROGRAM_TITLE', packet)
}
