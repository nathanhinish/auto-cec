'use strict'

const debug = require('debug')('cec:handler:RECORD_OFF')

module.exports = function recordOff(packet) {
  debug('RECORD_OFF', packet)
  this.emit('RECORD_OFF', packet)
}
