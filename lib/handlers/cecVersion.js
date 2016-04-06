'use strict'

const debug = require('debug')('cec:handler:CEC_VERSION')

module.exports = function cecVersion(packet) {
  debug('CEC_VERSION', packet)
  this.emit('CEC_VERSION', packet)
}
