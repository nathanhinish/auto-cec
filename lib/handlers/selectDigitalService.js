'use strict'

const debug = require('debug')('cec:handler:SELECT_DIGITAL_SERVICE')

module.exports = function selectDigitalService(packet) {
  debug('SELECT_DIGITAL_SERVICE', JSON.stringify(packet))
  this.emit('SELECT_DIGITAL_SERVICE', packet)
}
