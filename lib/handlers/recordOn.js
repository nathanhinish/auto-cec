'use strict'

const debug = require('debug')('cec:handler:RECORD_ON')

module.exports = function recordOn(packet) {
  debug('RECORD_ON', packet)
  this.emit('RECORD_ON', packet)
}
