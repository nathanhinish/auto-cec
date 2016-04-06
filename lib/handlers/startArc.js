'use strict'

const debug = require('debug')('cec:handler:START_ARC')

module.exports = function startArc(packet) {
  debug('START_ARC', packet)
  this.emit('START_ARC', packet)
}
