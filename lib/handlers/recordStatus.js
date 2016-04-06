'use strict'

const debug = require('debug')('cec:handler:RECORD_STATUS')

module.exports = function recordStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('RECORD_STATUS', packet)
}
