'use strict'

const debug = require('debug')('cec:handler:SELECT_ANALOGUE_SERVICE')

module.exports = function selectAnalogueService(packet) {
  debug('SELECT_ANALOGUE_SERVICE', JSON.stringify(packet))
  this.emit('SELECT_ANALOGUE_SERVICE', packet)
}
