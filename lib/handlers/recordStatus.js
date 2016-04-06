'use strict'

const debug = require('debug')('cec:handler:RECORD_STATUS')

module.exports = function recordStatus(packet) {
  debug('RECORD_STATUS', packet)
  this.emit('RECORD_STATUS', packet)
}
