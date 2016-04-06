'use strict'

const debug = require('debug')('cec:handler:NONE')

module.exports = function none(packet) {
  debug('NONE', JSON.stringify(packet))
  this.emit('NONE', packet)
}
