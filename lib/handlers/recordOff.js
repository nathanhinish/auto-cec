'use strict'

const debug = require('debug')('cec:handler:RECORD_OFF')

module.exports = function recordOff(packet) {
  debug(JSON.stringify(packet))
  this.emit('RECORD_OFF', packet)
}
