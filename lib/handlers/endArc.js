'use strict'

const debug = require('debug')('cec:handler:END_ARC')

module.exports = function endArc(packet) {
  debug('END_ARC', JSON.stringify(packet))
  this.emit('END_ARC', packet)
}
