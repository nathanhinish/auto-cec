'use strict'

const debug = require('debug')('cec:handler:NONE')

module.exports = function none(packet) {
  debug('NONE', packet)
  this.emit('NONE', packet)
}
