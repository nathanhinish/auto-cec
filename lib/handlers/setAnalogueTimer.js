'use strict'

const debug = require('debug')('cec:handler:SET_ANALOGUE_TIMER')

module.exports = function setAnalogueTimer(packet) {
  debug('SET_ANALOGUE_TIMER', JSON.stringify(packet))
  this.emit('SET_ANALOGUE_TIMER', packet)
}
