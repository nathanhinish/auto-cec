'use strict'

const debug = require('debug')('cec:handler:REQUEST_ARC_END')

module.exports = function requestArcEnd(packet) {
  debug('REQUEST_ARC_END', packet)
  this.emit('REQUEST_ARC_END', packet)
}
