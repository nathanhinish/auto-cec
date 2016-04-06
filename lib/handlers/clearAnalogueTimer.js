'use strict'

const debug = require('debug')('cec:handler:CLEAR_ANALOGUE_TIMER')

module.exports = function clearAnalogueTimer(packet) {
  debug(JSON.stringify(packet))
  this.emit('CLEAR_ANALOGUE_TIMER', packet)
}
