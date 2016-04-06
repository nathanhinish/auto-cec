'use strict'

const debug = require('debug')('cec:handler:REQUEST_ACTIVE_SOURCE')

module.exports = function requestActiveSource(packet) {
  debug(JSON.stringify(packet))
  this.emit('REQUEST_ACTIVE_SOURCE', packet)
}
