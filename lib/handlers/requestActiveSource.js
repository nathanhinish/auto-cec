'use strict'

const debug = require('debug')('cec:handler:REQUEST_ACTIVE_SOURCE')

module.exports = function requestActiveSource(packet) {
  debug('REQUEST_ACTIVE_SOURCE', JSON.stringify(packet))
  this.emit('REQUEST_ACTIVE_SOURCE', packet)
}
