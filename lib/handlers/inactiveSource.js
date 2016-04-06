'use strict'

const debug = require('debug')('cec:handler:INACTIVE_SOURCE')

module.exports = function inactiveSource(packet) {
  debug(JSON.stringify(packet))
  this.emit('INACTIVE_SOURCE', packet)
}
