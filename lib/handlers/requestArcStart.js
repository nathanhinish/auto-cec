'use strict'

const debug = require('debug')('cec:handler:REQUEST_ARC_START')

module.exports = function requestArcStart(packet) {
  debug(JSON.stringify(packet))
  this.emit('REQUEST_ARC_START', packet)
}
