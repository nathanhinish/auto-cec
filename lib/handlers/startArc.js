'use strict'

const debug = require('debug')('cec:handler:START_ARC')

module.exports = function startArc(packet) {
  debug('START_ARC', JSON.stringify(packet))
  this.emit('START_ARC', packet)
}
