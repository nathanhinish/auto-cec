'use strict'

const debug = require('debug')('cec:handler:CLEAR_EXTERNAL_TIMER')

module.exports = function clearExternalTimer(packet) {
  debug(JSON.stringify(packet))
  this.emit('CLEAR_EXTERNAL_TIMER', packet)
}
