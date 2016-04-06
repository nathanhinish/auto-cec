'use strict'

const debug = require('debug')('cec:handler:ACTIVE_SOURCE')

module.exports = function activeSource(packet) {
  debug('ACTIVE_SOURCE', JSON.stringify(packet))
  this.emit('ACTIVE_SOURCE', packet)
}
