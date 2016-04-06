'use strict'

const debug = require('debug')('cec:handler:END_ARC')

module.exports = function endArc(packet) {
  debug(JSON.stringify(packet))
  this.emit('END_ARC', packet)
}
